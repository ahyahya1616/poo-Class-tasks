# atelier POO en JavaScript

Ce atelier regroupe une série d'exercices pratiques pour se familiariser avec la Programmation Orientée Objet (POO) en JavaScript, en mettant en œuvre des concepts tels que l'héritage, la composition et la gestion des objets.

## 📌 Contenu du projet

### Exercice 1 : Gestion des Voitures 🚗
- Création d'une fonction constructeur `Voiture` avec les attributs : modèle, marque, année, type, carburant.
- Création d'une liste de voitures.
- Implémentation de l'héritage avec les classes `Hyundai` et `Ford`.
- Tri et affichage des voitures par année (ordre croissant).
- **Fichier** : `exercice1.js`

### Exercice 2 : Gestion des Étudiants et Professeurs 🎓
- Création des objets `Etudiant` et `Professeur`.
- Méthodes : `etudier()` et `enseigner()`.
- Tri des étudiants par ordre alphabétique (nom, prénom).
- **Fichier** : `exercice2.js`

### Exercice 3 : Manipulation de classes en ES6 🔢
- Définition de la classe `Vecteur2D` avec addition et affichage.
- Création de la classe `Rectangle` et de sa classe dérivée `Carre`.
- Définition de la classe `Point` et de la classe `Segment`.
- **Fichier** : `exercice3.js`

### Exercice 4 : Mini-Blog en JavaScript 📝
## Objectif

L'objectif de cet exercice est de créer un mini-blog utilisant la programmation orientée objet (POO) en JavaScript. Le projet permet aux utilisateurs de s'inscrire, se connecter, ajouter des publications, et afficher les publications. Les données sont stockées dans le `localStorage`. De plus, une fonctionnalité a été ajoutée pour permettre aux utilisateurs d'ajouter des images à leurs publications.

## Fonctionnalités

1. **Inscription et Connexion des Utilisateurs :**
   - **Inscription :** Les utilisateurs peuvent s'inscrire en remplissant leur nom, email et mot de passe. L'inscription est réalisée sur la page `signing.html`.
   - **Connexion :** Les utilisateurs peuvent se connecter avec leur email et mot de passe sur la page `login.html`.

2. **Création et Gestion des Publications :**
   - **Ajouter une publication :** Les utilisateurs connectés peuvent ajouter de nouvelles publications avec un titre, une description, et une image (facultative).
   - **Afficher les publications :** Les publications créées par chaque utilisateur sont affichées sur la page `index.html`.
   - **Supprimer une publication :** Les utilisateurs peuvent supprimer leurs publications depuis la page principale.

3. **Ajout d'Images aux Publications :**
   - Les utilisateurs peuvent télécharger une image pour chaque publication. L'image est ensuite affichée avec le titre et la description de la publication.

## Fichiers:

- **`login.html`** : Page de connexion où les utilisateurs peuvent se connecter avec leur email et mot de passe.
- **`signing.html`** : Page d'inscription où les utilisateurs peuvent créer un compte.
- **`index.html`** : Page principale qui affiche les publications de l'utilisateur connecté et permet l'ajout de nouvelles publications.
- **`blogs.html`** : Affichage des publications créées par l'utilisateur connecté.
- **`blogs.js`** : Contient la logique pour l'ajout, l'affichage, la suppression et la gestion des publications (y compris les images).
- **`signing.js`** : Gestion de l'inscription des nouveaux utilisateurs.
- **`login.js`** : Gestion de la connexion des utilisateurs.
## 🚀 Installation et Utilisation

Pour cloner et exécuter le projet localement :

1. Cloner le projet avec la commande suivante :
   ```bash
   git clone https://github.com/ahyahya1616/poo-Class-tasks.git
