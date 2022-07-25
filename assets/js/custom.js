// Core JS functions and initialization.

document.addEventListener('DOMContentLoaded', function() {

  /* Toggle search dialog. */
  function toggleSearchDialog() {
    if (document.querySelector("body").classList.contains("searching")) {
      document.querySelector("[id=search-query]").blur();
      document.querySelector("body").classList.remove("searching");
    } else {
      var results = document.querySelector(".search-results");
      document.querySelector("body").classList.add("searching");
      results.style.opacity = 1;
      results.style.visibility = "visible";
      document.getElementById("search-query").focus();
    }
  }

  window.onload = function() {
    // On search icon click toggle search dialog.
    document.querySelectorAll(".js-search").forEach(btn => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSearchDialog();
      })
    });
    document.addEventListener("keydown", (e) => {
      if (e.which == 27) {
        // `Esc` key pressed.
        if (document.querySelector("body").classList.contains("searching")) {
          toggleSearchDialog();
        }
      } else if (e.which == 191 && e.shiftKey == false && document.querySelector("input,textarea") !== document.activeElement) {
        // `/` key pressed outside of text input.
        e.preventDefault();
        toggleSearchDialog();
      }
    });
  }

}); //end onload
