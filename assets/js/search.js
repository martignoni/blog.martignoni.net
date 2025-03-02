/*************************************************
 *  Built-in Fuse based search algorithm.
 **************************************************/

/* ---------------------------------------------------------------------------
* Configuration.
* --------------------------------------------------------------------------- */

// Configure Fuse.
let fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  tokenize: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: [
    {name:'title', weight:0.9},
    {name:'summary', weight:0.7},
    {name:'content', weight:0.5},
    {name:'tags', weight:0.5}
  ]
};

// Configure summary.
let summaryLength = 150;

/* ---------------------------------------------------------------------------
* Functions.
* --------------------------------------------------------------------------- */

// fetch some json in vanilla JS
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

/**
 * By Mark Amery: https://stackoverflow.com/a/35385518
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function render(template, data) {
  // Replace placeholders with their values.
  let key, find, re;
  for (key in data) {
    find = '\\{\\{\\s*' + key + '\\s*\\}\\}';  // Expect placeholder in the form `{{bla}}`.
    re = new RegExp(find, 'g');
    template = template.replace(re, data[key]);
  }
  return template;
}

// Get query from URI.
function getSearchQuery(name) {
  return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

// Set query in URI without reloading the page.
function updateURL(url) {
  if (history.pushState) {
    window.history.pushState({path:url}, '', url);
  }
}

// Pre-process new search query.
function initSearch(force, fuse) {
  let query = document.getElementById("search-query").value;

  // If query deleted, clear results.
  if ( query.length < 1) {
    document.getElementById("search-query").innerHTML = "";
  }

  // Check for timer event (enter key not pressed) and query less than minimum length required.
  if (!force && query.length < fuseOptions.minMatchCharLength)
    return;

  // Do search.
  document.getElementById("search-hits").innerHTML = "";
  searchBlog(query, fuse);
  let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(query) + window.location.hash;
  updateURL(newURL);
}

// Perform search.
function searchBlog(query, fuse) {
  let results = fuse.search(query);
  // console.log({"results": results});

  if (results.length > 0) {
    var hitsTitle = document.createElement("h2");
    hitsTitle.textContent = results.length + " " + i18n.results;
    document.getElementById("search-hits").append(hitsTitle);
    parseResults(query, results);
  } else {
    var noResultsDiv = document.createElement("div");
    noResultsDiv.textContent = i18n.no_results;
    noResultsDiv.classList.add("search-no-results");
    document.getElementById("search-hits").append(noResultsDiv);
  }
}

// Parse search results.
function parseResults(query, results) {
  results.forEach( function(value, key) {
    let content = value.item.content;
    let snippet = "";
    let snippetHighlights = [];

    if ( fuseOptions.tokenize ) {
      snippetHighlights.push(query);
    } else {
      value.matches.forEach( function(matchValue, matchKey) {
        if (matchValue.key == "content") {
          let start = (matchValue.indices[0][0]-summaryLength>0) ? matchValue.indices[0][0]-summaryLength : 0;
          let end = (matchValue.indices[0][1]+summaryLength<content.length) ? matchValue.indices[0][1]+summaryLength : content.length;
          snippet += content.substring(start, end);
          snippetHighlights.push(matchValue.value.substring(matchValue.indices[0][0], matchValue.indices[0][1]-matchValue.indices[0][0]+1));
        }
      });
    }

    if (snippet.length < 1) {
      snippet += content.substring(0, summaryLength*2);
    }

    // Load template.
    var template = document.getElementById("search-hit-fuse-template").innerHTML;

    // Localize content types.
    let content_key = value.item.section;
    if (content_key in content_type) {
      content_key = content_type[content_key];
    }

    //replace values
    var output = render(template, {
      key: key,
      title: value.item.title,
      type: content_key,
      relpermalink: value.item.relpermalink,
      snippet: snippet
    });

    document.getElementById("search-hits").appendChild(htmlToElement(output));

    // Highlight search terms in result.
    snippetHighlights.forEach(function (snipvalue, snipkey) {
      new Mark(document.getElementById("summary-" + key)).mark(snipvalue);
    });

  });
}

/* ---------------------------------------------------------------------------
* Initialize.
* --------------------------------------------------------------------------- */

// If built-in search is enabled and Fuse loaded, then initialize it.
if (typeof Fuse === 'function') {
  // Wait for Fuse to initialize.
  fetchJSONFile(search_index_filename, function(search_index){
    let fuse = new Fuse(search_index, fuseOptions);

    // On page load, check for search query in URL.
    if (query = getSearchQuery('q')) {
      var results = document.querySelector(".search-results");
      document.querySelector("body").classList.add("searching");
      results.style.opacity = 1;
      results.style.visibility = "visible";
      document.getElementById("search-query").value = query;
      document.getElementById("search-query").focus();
      initSearch(true, fuse);
    }

    // On search box key up, process query.
    document.getElementById("search-query").onkeyup = function(e) {
      initSearch(true, fuse);
    }

  });
}

