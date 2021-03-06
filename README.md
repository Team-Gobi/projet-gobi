# Gobi Movie Watch List
> Projet de Sébastien Baumann et Francesco Amoroso


## Description
Possibilité de faire une liste de films que l'on aimerait regarder.
En cliquant sur un titre de film on arrive sur une page où l'on trouve le résumé du film, une barre pour indiquer sa popularité et la date de sortie.

## Outils utilisés:

+ Vue.js
+ vue-material
+ webpack
+ node.js / npm
+ The Movie DB API
+ Axios

## Install

``` bash
#Install dependencies
npm install
```
## Build

```
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Run

```
#Start the development server
npm run dev
```
## Architecture de l'application

L'architecture de notre application est la suivante:
+ App.vue (Squelette de l'application)
+ Home.vue (affichage de la liste de films, fonctions de recherche de film et fonction de filtre de la liste de films personnelle)
+ Search.vue (Permet de rechercher un film grâce à l'API The Movie DB)
+ Movie.vue (détails d'un film se trouvant dans la liste)

![image](documents/architecture-app.png "Architecture")
Le fichier détaillé ainsi ques les captures d'écran se trouvent dans le dossier "documents"

## Demo
[demo](https://team-gobi.github.io/projet-gobi/#/)

### Améliorations

+ Nous souhaitons dans le futur, améliorer cette application en ajoutant des fonctionnalités supplémentaires.

  + Choix de la langue pour les titres et les résumés des films.
  + Géolocalisation et propositions de séances au cinéma selon notre position et les films se trouvant dans la liste personnelle.



