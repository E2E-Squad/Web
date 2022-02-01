## Prérequis
* git (obviously)
* node 16 avec npm

> Sur MacOS ou Linux, je suggère fortement d'utiliser
> [Node.js Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) afin de simplifier l'installation et
> la gestion de node.

## Getting Started

1. Cloner le dépôt
2. Installer les dépendances
3. Démarrer le serveur de développement

```bash
git clone git@github.com:E2E-Squad/Web.git E2E-Web
cd E2E-Web
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans un navigateur pour voir le résultat.

## Styleguide

Le styleguide possède pour le moment son propre serveur, car il nécessite Webpack 4 pour tourner correctement (d'après
ce que j'ai pu expérimenter et plusieurs issues Github) or Next.js utilise Webpack 5. De plus, Next.js 12 utilise
désormais [SWC](https://swc.rs/) ou lieu de [Babel](https://babeljs.io/) comme transpilateur de JS alors que le
styleguide utilise toujours Babel.

Il se peut donc que quelque chose fonctionne sur le site principal, mais pas sur le styleguide, ou inversement. Si le
cas se présente, merci de privilégier le site principal et signaler un bug sur le styleguide.

Tous les composants sont importés automatiquement depuis le répertoire `components/` à la racine du projet. 

1. Aller dans le répertoire `styleguide`
2. Installer les dépendances
3. Démarrer le serveur de développement

```bash
cd E2E-Web/styleguide
npm install
npm run dev
```