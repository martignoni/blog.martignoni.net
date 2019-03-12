---
title: "Températures : une visualisation interactive"
author: Nicolas Martignoni

date: 2013-08-25T17:31:38+00:00
slug: temperatures-une-visualisation-interactive
categories:
  - Énergie
  - Visualisation
tags:
  - Énergie
  - HTML5
  - Visualisation

---
Une [visualisation des températures et degrés-jours à Fribourg][6], en HTML5 et donc compatible avec les tablettes et autres appareils sous Android et iOS.

Les données sont extraites à partir de la [source officielle de l'État de Fribourg][1], importées dans une base [SQLite][2] à l'aide d'un script [PHP][3], puis exportées en [JSON][4]. L'affichage est traité ensuite au moyen de la bibliothèque [Highcharts][5].

<iframe src="https://meteo.martignoni.net/" width="100%" height="520" scrolling="yes" class="iframe-class" frameborder="0"></iframe>

 [1]: https://www.fr.ch/sde/energie-agriculture-et-environnement/energie/degres-jours-et-temperature-moyenne-releves-hebdomadaires "Service de l'énergie, Fribourg"
 [2]: https://www.sqlite.org/ "SQLite"
 [3]: https://php.net/ "PHP"
 [4]: https://www.json.org/ "JSON"
 [5]: https://www.highcharts.com/ "Highcharts"
 [6]: https://meteo.martignoni.net/ "Températures et degrés-jours à Fribourg"

<!--more-->
