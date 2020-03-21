---
title: "COVID-19 : Un scénario pour un enseignement totalement à distance"
date: 2020-03-16
lastmod: 2020-03-20
author: Nicolas Martignoni
slug: scenario-pour-enseigner-a-distance
description: La fermeture de toutes les écoles pour passer à l'enseignement à distance met les enseignantes et les enseignants devant la nécessité d'adopter de nouvelles façon de travailler, sans aucune préparation et souvent sans plan de continuité. Cet article décrit un scénario pour un enseignement totalement à distance, puisqu'il n'est plus question actuellement d'enseignement hybride.
categories:
  - École, e-learning et ICT
  - Technologie
  - Citoyenneté
tags:
  - E-learning
  - Formation
  - Enseignement et apprentissage
  - Numérisation
  - Moodle
  - Pédagogie
  - COVID-19
  - Continuité pédagogique
---
Dans l'enseignement obligatoire et dans le secondaire du deuxième degré[^isced], l'enseignement et l'apprentissage totalement à distance est très rare, et il n'existe presque aucune expérience. Le scénario suivant permet de se faire une idée de la façon d'organiser un cours à distance. Il aborde aussi les implications en terme d'outils et d'infrastructure nécessaires.

Pour des raisons d'organisation, le scénario le plus vraisemblable est celui dans lequel on cherche à conserver la planification des cours déjà en place, ne serait-ce que pour s'assurer que des cours n'ont pas lieu en même temps pour le même public.

Si l'on veut que le dispositif ait une chance d'avoir de bons résultats en terme d'apprentissages, il faut qu'il combine deux éléments, l'un __synchrone__, l'autre __asynchrone__.

<!--more-->

### L'élément synchrone : le cours en visio-conférence (_webinar_)

Il s'agit donc ici de donner un cours, avec la possibilité pour les élèves d'interagir directement avec l'enseignante ou l'enseignant. L'interaction peut être plus ou moins intense. Un tel dispositif est appelé _visio-conférence_, _conférence web_ ou _webinar_, parfois (mal) francisé en _webinaire_. Dans le contexte de l'enseignement, on parle également de _classe virtuelle_.

À l'heure prescrite, l'enseignante ou l'enseignant donne son cours de manière __synchrone__. Elle ou il peut partager des documents et utilise d'autres outils en ligne pour soutenir son cours (forcément) frontal, par exemple un outil de rédaction simultané, comme Etherpad, ou encore un tableau blanc virtuel. Si possible, la session est enregistrée, et mise ensuite à disposition des élèves dans la phase asynchrone suivante ([voir ci-dessous](#lélément-asynchrone-activités-et-ressources-en-ligne)).

L'enseignante ou l'enseignant répond aux questions soit directement en audio, soit via un _chat_ textuel, en général fourni par le service de visio-conférence.

Pour mettre en place une visio-conférence, il est nécessaire que l'enseignant ou l'enseignante se soit préalablement inscrite chez un fournisseur offrant un tel service et se soit familiarisée en effectuant quelques tests préalables.

Des exemples de tels services sont :

- [Framatalk](https://framatalk.org/) (libre et gratuit)
- [Jitsi](https://meet.jit.si/) (libre et gratuit)
- [BigBlueButton](http://docs.bigbluebutton.org/) (libre et gratuit)

Les services suivants sont très bons et peuvent être utilisés gratuitement à petite échelle, mais ils sont propriétaires et leur politique en matière de protection des données n'est pas particulièrement transparente.

- [Zoom](https://zoom.us/) (propriétaire, plan gratuit durant la crise du COVID-19)
- [WebEx](https://www.webex.com/) (propriétaire, plan gratuit durant la crise du COVID-19)

On peut aussi utiliser à cet effet [Skype](https://www.skype.com/) (propriétaire, gratuit).

L'article [Conseils pour une visio-conférence réussie]({{< relref "conseils-visio-conference" >}}) propose quelques recommandations pour bien réaliser cette phase synchrone.

### L'élément asynchrone : activités et ressources en ligne

En dehors des phases synchrones, le cours doit être accompagné par des activités __asynchrones__ et des ressources en ligne. Ces activités et ressources permettent aux élèves d'apprendre à leur rythme, au moment où cela leur est le plus profitable, en consultant les documents fournis par l'enseignante ou l'enseignant.

Les activités doivent offrir et encourager l'interaction entre élèves, pour soutenir la co-construction, et permettre de continuer l'interaction de l'enseignant ou de l'enseignante avec les élèves.

Parmi les activités asynchrones possibles, on peut proposer des __quiz__ formatifs avec auto-correction et feedbacks renvoyant vers la matière vue en classe, des __devoirs__, ceux-là même que l'on donne dans un enseignement normal, qui pourront être rendus par voie numérique. La mise à disposition d'un __forum de discussion modéré__ dont le sujet est exclusivement la matière du cours est un élément essentiel, permettant de donner des explications personnalisées, mais surtout de stimuler les explications entre pairs. D'autres activités, selon la créativité de l'enseignant ou de l'enseignante, peuvent évidemment être proposées : glossaires, flash-cards, etc.

Pour soutenir les activités asynchrones, l'enseignante ou l'enseignant mettra à disposition des ressources nécessaires à l'élève pour y travailler. Par exemple, les enregistrement des sessions synchrones, le polycopié du cours, des liens web pour approfondir la matière, des vidéos, des sons, etc.

On constate facilement que pour cette partie asynchrone, l'utilisation d'une plateforme d'apprentissage comme [Moodle](https://moodle.org/) est indispensable, car elle permet de regrouper en un seul endroit toutes les activités et ressources, ce qui facilite grandement l'accès des élèves. Parfois, elle offre même le service de visio-conférence pour la partie synchrone.

Si votre établissement ne propose pas une telle plateforme, il existe actuellement diverses solutions de repli, parmi lesquelles :
- [MoodleCloud](https://moodlecloud.com/) : un Moodle personnel et gratuit pour 50 élèves maximum. Compris dans cette offre l'utilisation du service de visio-conférence BigBlueButton ;
- si vous avez plus de 50 élèves, [SOS Moodle](https://sos.moodlemoot.fr/) offre gratuitement des cours en ligne pour ceux dont l'établissement ne fournit pas de plateforme d'apprentissage ;
- le [Gymnase de Nyon](https://moodle.gymnyon.vd.ch/) ouvre gratuitement des cours Moodle sur sa plateforme pour tout enseignant romand qui en fait la demande ; contact : {{< cloakemail display="Dominique-Alain Jan" address="dominiquealain.jan@vd.educanet2.ch" query="subject=COVID-19: demande de cours Moodle" >}}.

L'article [Organiser son enseignement asynchrone]({{< relref "organiser-enseignement-asynchrone" >}}) propose des pistes pour organiser cette phase asynchrone.

### Nous devons à nos élèves de nous investir

Une formation et une mise en pratique auraient été bénéfiques tant pour la visio-conférence que pour l'utilisation d'une plateforme d'apprentissage.

Même s'il est maintenant trop tard pour ça, il vaut malgré tout la peine de construire avec soin son enseignement à distance : c'est ce que nous devons à nos élèves !

Chaque enseignant devra prendre du temps pour mettre en place un tel dispositif ; mais en contrepartie, nous allons apprendre plein de choses.

_Mise à jour du 17 mars 2020 : ajout d'un lien vers l'article [Conseils pour une visio-conférence réussie]({{< relref "conseils-visio-conference" >}})._

_Mise à jour du 20 mars 2020 : ajout d'un lien vers l'article [Organiser son enseignement asynchrone]({{< relref "organiser-enseignement-asynchrone" >}})._

[^isced]: Classification [ISCED 3](http://uis.unesco.org/en/topic/international-standard-classification-education-isced) ; en France : lycées ; en Suisse, suivant le canton : gymnases, collèges ou lycées ; en Belgique : secondaire supérieur.
