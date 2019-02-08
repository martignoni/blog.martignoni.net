---
title: "Températures : une visualisation interactive"
author: Nicolas Martignoni
type: post
date: 2013-08-25T17:31:38+00:00
url: /2013/08/temperatures-une-visualisation-interactive/
categories:
  - Énergie
  - Visualisation
tags:
  - Énergie
  - HTML5
  - Visualisation

---
Une visualisation des températures et degrés-jours à Fribourg, en HTML5 et donc compatible avec les tablettes et autres appareils sous Android et iOS.

Les données sont extraites à partir de la [source officielle de l'État de Fribourg][1], importées dans une base [SQLite][2] à l'aide d'un script [PHP][3], puis exportées en [JSON][4]. L'affichage est traité ensuite au moyen de la bibliothèque [Highcharts][5].

<!-- iframe plugin v.4.4 wordpress.org/plugins/iframe/ -->

 [1]: http://www.fr.ch/sde/fr/pub/degres_jours.htm "Service de l'énergie, Fribourg"
 [2]: http://www.sqlite.org/ "SQLite"
 [3]: http://php.net/ "PHP"
 [4]: http://www.json.org/ "JSON"
 [5]: http://www.highcharts.com/ "Highcharts"