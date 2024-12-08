Projet Angular - Gestion des Assignments

Ce projet est une application Angular complète permettant de gérer les assignments avec un backend Node.js et une base de données MongoDB.


Le démarrage du backend peut nécessiter jusqu'à 40 secondes pour répondre, car si le backend n'est pas activé pendant une longue période, le service cloud passe en mode veille.

Liens de l'application：

Frontend (Angular) : https://front-end-for-angulardevoir.onrender.com/home

Backend (API Node) : https://back-end-for-angulardevoir.onrender.com/api/assignments

Fonctionnalités réalisées

Services：

Intégration de services Angular pour la communication avec l'API backend.
Service pour gérer les données des assignments.

Routes：

Système de navigation entre les pages (liste des assignments, ajout, modification).
Routes backend pour récupérer, ajouter, modifier et supprimer les assignments.
Authentification et Guard

Authentification basique (connexion/déconnexion)：

Guard pour protéger les pages sensibles.

CRUD des assignments：

Ajout d’un nouvel assignment avec des informations (nom, date de rendu, statut).
Modification et suppression d’un assignment existant.

Pagination：

Mise en œuvre de la pagination pour afficher les assignments par page.
Navigation entre les pages avec affichage du numéro de page courant.

Modalités techniques：

Architecture：

Frontend Angular : Hébergé sur Render.
Backend Node.js : Hébergé sur Render.
Base de données MongoDB : Hébergée sur MongoDB Atlas.


# AssignmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
