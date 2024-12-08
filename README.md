[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16038265)
# Angular-start
## Michel Buffa, Leo Donati, Université Côte d'Azur 
Repository de démarrage pour vos TP de Angular


Projet Angular - Gestion des Assignments

Ce projet est une application Angular complète permettant de gérer les assignments avec un backend Node.js et une base de données MongoDB.


Le démarrage du backend peut nécessiter jusqu'à 40 secondes pour répondre, car si le backend n'est pas activé pendant une longue période, le service cloud passe en mode veille.

Liens de l'application

Frontend (Angular) : https://front-end-for-angulardevoir.onrender.com/home

Backend (API Node) : https://back-end-for-angulardevoir.onrender.com/api/assignments

Fonctionnalités réalisées

Services

Intégration de services Angular pour la communication avec l'API backend.
Service pour gérer les données des assignments.

Routes

Système de navigation entre les pages (liste des assignments, ajout, modification).
Routes backend pour récupérer, ajouter, modifier et supprimer les assignments.
Authentification et Guard

Authentification basique (connexion/déconnexion).

Guard pour protéger les pages sensibles.

CRUD des assignments

Ajout d’un nouvel assignment avec des informations (nom, date de rendu, statut).
Modification et suppression d’un assignment existant.

Pagination

Mise en œuvre de la pagination pour afficher les assignments par page.
Navigation entre les pages avec affichage du numéro de page courant.

Modalités techniques

Architecture
Frontend Angular : Hébergé sur Render.
Backend Node.js : Hébergé sur Render.
Base de données MongoDB : Hébergée sur MongoDB Atlas.





* Si vous utilisez le github Codespace, alors dans votre machine virtuelle `npm`, `node` et `angular/CLI` sont déjà installés.
* Pour cloner en local ce repository, il faut :
   1. avoir installé `git` (ou `gitbash`) sur votre machine
   1. créer un répertoire de travail et s'y déplacer
   1. cloner le repository distant
```bash
git clone nom-du-repository
```



### Pour vérifier que l'installation est complète

```bash 
npm --version
node --version
ng version
```

### Chaque fois que vous modifiez votre code 

```bash
git pull            #pour synchroniser votre repo local avec le repo de github 
git add -A          #pour informer git de suivre tous les fichiers présents dans le répertoire
git commit -m "message descriptif"      #pour intégrer dans git les dernières modifications faites     
git push            #pour synchroniser le repo github avec le repo local
```

### Pour ajouter un tag (une étiquette) à l'état courant du repository sur github

Une étiquette TPXX doit être ajoutée à la fin de chaque séance de TP pour voir l'évolution progressif de votre travail.

```bash
git tag NomEtiquette
git push --tags
```








