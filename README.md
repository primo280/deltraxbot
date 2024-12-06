DEMO: https://deltraxbot.vercel.app/
# Chatbot - Deltrax

Un chatbot interactif pour répondre aux questions courantes concernant **Deltrax**, une plateforme d'analyses et d'échanges en cryptomonnaies. Le chatbot permet à l'utilisateur de poser des questions pré-définies et d'afficher les réponses correspondantes.

## Fonctionnalités

### 1. **Interface Utilisateur**
   - **Liste des questions** : L'utilisateur peut voir une liste de questions cliquables sur le côté.
   - **Réponses animées** : Lorsque l'utilisateur clique sur une question, la réponse correspondante est affichée avec une animation fluide.
   - **Retour aux questions** : Après avoir vu la réponse, l'utilisateur peut revenir à la liste des questions via un bouton de retour.

### 2. **Animations**
   - Les boutons des questions ont un effet de survol et de clic pour améliorer l'interaction (utilisation de `hover` et `scale` de Tailwind CSS).
   - Les réponses sont affichées progressivement avec une animation d'apparition (utilisation de `motion` de `framer-motion`).

### 3. **Responsivité**
   - **Mobile First** : L'application est conçue pour être réactive. Sur les appareils mobiles, la liste des questions et la réponse sont empilées verticalement. Sur les écrans plus larges, les questions et réponses sont affichées côte à côte pour une meilleure utilisation de l'espace.
   - **Design Moderne** : Le design est simple et épuré avec des transitions fluides et un fond dégradé.

### 4. **Fonctionnalités principales**
   - Les questions sont affichées dans un format de liste cliquable.
   - Lorsque l'utilisateur clique sur une question, la réponse est affichée dans un conteneur animé.
   - Un bouton "Retour" permet de revenir à la liste des questions.
   - Utilisation de **Tailwind CSS** pour la mise en page, les animations et le style.

## Prérequis

- **Node.js** : Assurez-vous d'avoir Node.js installé sur votre machine. Si vous ne l'avez pas, vous pouvez le télécharger [ici](https://nodejs.org/).
- **NPM** : Le gestionnaire de packages Node.js est également requis pour installer les dépendances du projet.

## Installation

### 1. Cloner le projet

Clonez le projet depuis le dépôt GitHub (ou depuis une autre source) :

```bash
git clone https://github.com/your-username/chatbot-deltrax.git
```

### 2. Installer les dépendances

Une fois le projet cloné, naviguez dans le dossier du projet et installez les dépendances avec `npm` ou `yarn` :

```bash
cd chatbot-deltrax
npm install
```

Ou si vous utilisez **Yarn** :

```bash
yarn install
```

### 3. Lancer le serveur de développement

Une fois les dépendances installées, lancez le serveur de développement avec la commande suivante :

```bash
npm run dev
```

Ou si vous utilisez **Yarn** :

```bash
yarn dev
```

Accédez ensuite à [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application en action.

## Structure du projet

Voici une brève explication de la structure du projet :

```
/chatbot-deltrax
│
├── /components
│   └── Chatbot.tsx           # Le composant principal du chatbot avec l'affichage des questions et réponses
│
├── /pages
│   └── index.tsx             # La page d'accueil qui contient le composant Chatbot
│
├── /styles
│   └── globals.css           # Styles globaux pour l'application (si nécessaires)
│
├── /public
│   └── /images               # Contient les images utilisées par l'application (si nécessaires)
│
├── tailwind.config.js        # Configuration de Tailwind CSS
├── tsconfig.json             # Configuration TypeScript
├── package.json              # Liste des dépendances et scripts de l'application
├── README.md                 # Ce fichier README
└── .gitignore                # Fichier pour ignorer les fichiers non nécessaires au dépôt git
```

### Détails des fichiers importants :

- **`/components/Chatbot.tsx`** : Ce fichier contient la logique du chatbot, y compris les interactions utilisateur, les animations et l'affichage des réponses.
  
- **`/pages/index.tsx`** : Le fichier d'entrée de la page d'accueil, où le composant `Chatbot` est importé et affiché.

- **`tailwind.config.js`** : Le fichier de configuration de Tailwind CSS, où vous pouvez personnaliser les couleurs, espacements et autres paramètres du design.

- **`tsconfig.json`** : Configuration TypeScript pour garantir que le code fonctionne correctement.

## Utilisation du Chatbot

### 1. Affichage des questions
Les questions sont affichées sous forme de boutons. L'utilisateur peut cliquer sur une question pour voir la réponse correspondante. 

### 2. Affichage de la réponse
Une fois qu'une question est sélectionnée, la réponse est affichée avec une animation de texte progressif. 

### 3. Retour aux questions
Une fois la réponse affichée, un bouton "Retour" est proposé à l'utilisateur pour revenir à la liste des questions.

### 4. Réactivité
Le design de l'application est entièrement réactif. Sur les petits écrans (mobiles), la liste des questions et la réponse sont empilées verticalement, tandis que sur les écrans plus larges (tablettes et ordinateurs), ils sont affichés côte à côte pour maximiser l'utilisation de l'espace.

## Personnalisation

Vous pouvez facilement personnaliser ce chatbot en ajoutant, supprimant ou modifiant les questions et les réponses dans la constante `questionsAndAnswers`. 

Exemple d'ajout d'une nouvelle question :
```ts
{ question: "Nouvelle question ?", answer: "Voici la réponse à la nouvelle question." },
```

## Dépendances

Le projet utilise les bibliothèques suivantes :
- **React** : Bibliothèque pour construire l'interface utilisateur.
- **Framer Motion** : Pour les animations fluides.
- **Tailwind CSS** : Pour le design responsive et moderne.
- **TypeScript** : Pour une meilleure sécurité du code avec les types.

## Contribution

Si vous souhaitez contribuer à ce projet, voici quelques étapes à suivre :

1. Forkez ce projet.
2. Créez une nouvelle branche : `git checkout -b ma-nouvelle-fonctionnalité`.
3. Apportez vos modifications et commitez-les : `git commit -am 'Ajout d'une nouvelle fonctionnalité'`.
4. Poussez la branche : `git push origin ma-nouvelle-fonctionnalité`.
5. Ouvrez une Pull Request.

## License

Ce projet est sous la licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.
