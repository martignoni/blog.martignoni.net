---
title: "Nouveau moteur pour ce blog : Hugo"

date: 2019-03-01
slug: migration-vers-hugo
description: Ce blog fonctionne désormais grâce à un générateur de sites statiques, Hugo, qui a remplacé avantageusement WordPress. Un changement pour plus de rapidité, de sécurité et des économies.
categories:
  - Web
  - Informatique
  - Technologie
tags:
  - Hugo
  - Blog
  - Logiciel libre
  - Open Source
---
J'ai terminé il y a quelques jours la migration de ce blog vers [Hugo][hugo], un [générateur de sites statiques][what].

En 2006, [lorsque j'ai commencé ce blog][first], le choix de WordPress était logique, et les arguments sont encore valides : écrit en PHP, il fonctionne donc presque chez n'importe quel hébergeur ; il est libre et gratuit ; comme il est très répandu — [WordPress][wp] est le moteur de [plus de 33% de tous les sites web][wp33] du monde — on a à disposition de nombreuses extensions et, en cas de problème, on a accès à une communauté d'utilisateurs active et de qualité.

### Alors pourquoi changer ?

Il y a de [nombreuses raisons][quaternum] pour passer à un [générateur de sites statiques][what], mais les principales sont la rapidité, une sécurité accrue et l'économie faite sur l'hébergement, vu les faibles besoins en infrastructure matérielle côté serveur et que PHP n'est plus nécessaire.

<!--more-->

- __Rapidité__ : Hugo met environ 850 millisecondes pour générer la totalité des quelque 600 pages de ce blog. Vous avez bien lu, __moins d'une seconde__ ! Il suffit alors d'une simple copie de fichiers vers le serveur est c'est tout. Sur le serveur, les fichiers sont tous statiques, et sont envoyés directement par le serveur web, sans nécessiter de traitement préalable. Ils sont donc servis beaucoup plus rapidement que l'équivalent sur WordPress.

- __Sécurité__ : j'ai fait avec WordPress et ses plugins quelques mauvaises expériences, qui m'ont donné des sueurs froides. Je suis donc devenu inquiet à l'idée qu'un trou de sécurité apparaisse et que, faute d'une mise-à-jour faite à temps ou pas encore disponible, mon serveur soit compromis. Par ailleurs, comme certains plugins communiquent avec le serveur de leur auteur, je devenais mal à l'aise avec cette fuite de données, certes mineure. Avec un site web statique, tous ces problèmes n'existent plus.

- __Économie__ : mon ancien hébergeur [Infomaniak][infomaniak], par ailleurs très bon, me coûtait autour de 120 CHF par année, notamment parce qu'il offre une foultitude d'options simples à utiliser (mais superflues pour mon usage) et ne nécessite pas de mettre les mains dans le cambouis. Actuellement, j'ai un simple serveur virtuel chez [Netcup][netcup], plus performant, et qui me coûte la moitié !

Voici encore d'autres avantages : je ne suis plus dépendant d'une technologie (WordPress + PHP). Tous les fichiers sont en texte pur, écrits en [markdown][markdown], et gérés par un [système de contrôle de versions][repo], ce qui me permet de retrouver n'importe quelle ancienne mouture de mes textes. Mon site est en HTML, CSS et JS purs, donc pas de problème pour migrer au cas où. Il est également plus léger : je suis passé de 155 Mo à 34 Mo, sans compter la taille de la base de données.

Il y a quand même des inconvénients. Essentiellement, le temps nécessaire à la prise en main de Hugo pour adapter un site web existant. La courbe d'apprentissage est raide, et j'ai investi bien quelques heures pour migrer ce site, après avoir déjà fait la démarche, en février 2018, pour le [site de la MoodleBox][moodlebox].

### Le choix de Hugo

[{{< figure src="hugo-logo.svg" alt="Hugo logo" class="alignright" width="270px" >}}][hugo]
En raison des multiples avantages des sites statiques, il existe de [très nombreux générateurs][staticgen], et leur nombre a récemment considérablement augmenté. Alors pour quelle raison avoir choisi [Hugo][hugo] ?

Mes premiers critères lors du choix d'un logiciel libre sont la qualité et l'étendue de sa communauté d'utilisateurs, ainsi que l'élégance de la solution. Seuls [Jekyll][jekyll] et [Hugo][hugo] répondent à ces critères selon mon évaluation, et les autres générateurs n'entrent ainsi pas en ligne de compte pour mon utilisation.

Ce qui a fait pencher la balance en faveur de Hugo est essentiellement la simplicité de son installation : il suffit d'installer __un seul exécutable__, sans aucune dépendance, et c'est terminé. En comparaison, l'installation de Jekyll est un calvaire : elle nécessite d'installer un environnement de développement Ruby, ainsi que d'autres outils de développement, ce qui génère une complexité à mon avis indésirable.[^1]

### Est-ce que ça valait le coup de changer ?

Sans aucun doute.

#### Le positif:

- Plus rapide (beaucoup plus rapide)
- Plus sûr (beaucoup plus sûr)
- Meilleur marché
- PHP pas nécessaire
- Pas de base de données nécessaire
- Pas de _lock-in_: tout est en fichier texte
- Déploiement automatique avec GitHub ([voir un prochain article][deploy])
- Backup très simple à effectuer

#### Le négatif:

- Travail important nécessaire pour changer
- Configuration et mise en place pas évidente

Les aspects positifs — rapidité, sécurité, économie — dépassent largement les inconvénients. Ne plus être dépendant d'une technologie (pas de _lock-in_) est également de mon point de vue un grand avantage. Tout cela valait bien le temps investi. Et en plus j'ai appris plein de choses intéressantes.


  [^1]: Si vous venez du monde WordPress et que voulez vous initier à Hugo, lisez cet [excellent article sur le sujet][regis], de [Régis Philibert](https://regisphilibert.com).

  [first]: {{< relref "posts/bienvenue-au-club" >}}
  [hugo]: https://gohugo.io
  [quaternum]: https://www.quaternum.net/2012/12/23/pourquoi-quitter-wordpress/
  [jekyll]: https://jekyllrb.com
  [what]: https://www.ionos.fr/digitalguide/sites-internet/creation-de-sites-internet/quest-ce-quun-generateur-de-site-statique/
  [staticgen]: https://www.staticgen.com
  [wp]: https://wordpress.org/
  [wp33]: https://wordpress.org/about/features/
  [infomaniak]: https://www.infomaniak.com
  [netcup]: https://www.netcup.de
  [markdown]: https://daringfireball.net/projects/markdown/
  [moodlebox]: https://moodlebox.net
  [repo]: https://github.com/martignoni/blog.martignoni.net
  [regis]: https://regisphilibert.com/blog/2019/01/from-wordpress-to-hugo-a-mindset-transition/
  [deploy]: {{< relref "posts/hugo-deployment" >}}
