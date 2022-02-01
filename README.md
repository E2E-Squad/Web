## Prérequis
* git (obviously)
* node >= 14 avec npm

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

Afin de contourner les problèmes rencontrés lors des multiples tentatives d'intégration du styleguide
avec Next.js, le styleguide possède son propre serveur et ses propres dépendances. Il importe néanmoins
les composants du projet automatiquement.

Il se peut donc que quelque chose fonctionne sur le site principal, mais pas sur le styleguide, ou inversement. Si le
cas se présente, merci de privilégier le site principal et signaler un bug sur le styleguide.

Tous les composants sont importés automatiquement depuis le répertoire `components/` à la racine du projet. 

1. Aller dans le répertoire `styleguidist`
2. Installer les dépendances
3. Démarrer le serveur de développement

```bash
cd E2E-Web/styleguidist
npm install
npm run styleguide
```