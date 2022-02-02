## Créer le fichier

1. Créer un dossier au bon endroit dans le répertoire `components/{Atoms,Molecules,Organisms}/`
2. Créer un fichier `*.tsx` (les composants prennent une majuscule) dans le répertoire créé.

Vous devriez déjà voir apparaître votre composant dans le styleguide.

Une erreur est apparue dans la console, car ce fichier n'exporte pas encore de composant.

Exemple :
``` text static
I create a component called Button.
.
├── ...
├── components
│   ├── Atoms
│   │   ├── Button          # Component directory
│   │   │   └── Button.tsx  # Component file
│   │   └── ...
│   ├── Molecules
│   └── Organisms
└── ...
```

## Exporter le composant

Éditer le fichier `tsx` fraîchement créé et ajouter le code de base d'un composant.
Le nom de la fonction correspond au nom du composant.

Exemple :
```tsx static
import React from 'react';

/**
 * The only true button.
 */
const Button = () => {
    
}

export default Button;
```

Le commentaire sert à autodocumenter le composant dans le styleguide.
Vous devriez déjà voir apparaître votre commentaire en description du composant dans
le styleguide.

## Afficher le composant

Pour afficher le composant dans le styleguide, il faut créer un fichier (markdown)
d'exemple qui portera le même nom que notre composant. Il prendra l'extension `.md`.

Exemple :
``` text static
I create the example file for my Button component.
.
├── ...
├── components
│   ├── Atoms
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   └── Button.md   # Example file
│   │   └── ...
│   ├── Molecules
│   └── Organisms
└── ...
```

Dans ce fichier, il faut écrire une description (si besoin) et un example en code block
markdown qui sera exécuté par le styleguide.

Exemple :
````markdown static
This button is really basic.

```tsx
<Button />
```
````

À ce moment, vous devriez voir une erreur apparaître sur le styleguide car la fonction
ne retourne rien. Il faut dire au composant ce qu'il est censé afficher.

Le JSX (ou TSX) permet de manipuler des éléments du DOM sans devoir recourir
à des méthodes obscures à base chaînes de caractères passées dans des fonctions.

La fonction peut donc directement retourner le composant en HTML.

Exemple :
```tsx static
const Button = () => {
    return (
        <button>I am a button</button>
    )
}
```

Et voilà ! Vous avez créé un composant ! Voyons voir comment modifier son apparence...

## Styler un composant

### Grâce à un module css

Pour pouvoir appliquer du style à un composant, il faut lui attribuer un module css. Pour ce
projet, nous utilisons SASS dans sa syntaxe délimitée (SCSS).
Ce fichier aura donc le nom de notre composant avec l'extension `.module.scss`.

Exemple :
``` text static
I create the style file for my Button component.
.
├── ...
├── components
│   ├── Atoms
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss   # Style file
│   │   │   └── Button.md
│   │   └── ...
│   ├── Molecules
│   └── Organisms
└── ...
```

### Inline

### Styled Component

### Global (BEM)