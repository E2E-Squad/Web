Un bouton avec les propriétés par defaut:
```tsx
<Button>Bouton</Button>
```

Tous les types de boutons:
```tsx padded
import Link from "next/link";
<>
<Button styleClass="primary">Primary</Button>
<Button styleClass="primary"><Link href={'#'}>Link as button</Link></Button>
<Button styleClass="danger">Danger</Button>
<Button styleClass="success">Success</Button>
<Button styleClass="link">Button as link</Button>
</>
```

Avec une fonction `onClick`:
```tsx
<Button onClick={() => alert("Bouton cliqué")}>Bouton</Button>
```

Mettre à jour un état:

```tsx padded
import {useState} from "react";

const [counter, setCounter] = useState(0);
<>
<span>{counter}</span>    
<Button onClick={() => setCounter(counter + 1)}>+1</Button>
</>
```