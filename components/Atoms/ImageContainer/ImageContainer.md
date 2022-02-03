Une image avec les propriétés par défaut :
```tsx
<ImageContainer src={"https://via.placeholder.com/150"} />
```
Les différentes tailles (Small, Medium, Large et Big) :
```jsx padded
import {Size} from 'lib/enums';

<>
    <ImageContainer size={Size.Small} src={"https://via.placeholder.com/150"} />
    <ImageContainer size={Size.Medium} src={"https://via.placeholder.com/150"} />
    <ImageContainer size={Size.Large} src={"https://via.placeholder.com/150"} />
    <ImageContainer size={Size.Big} src={"https://via.placeholder.com/150"} />
</>
```
Les différentes formes (Square, Circle and Rectangle) :
```tsx padded
import {Shape} from 'lib/enums';

<>
    <ImageContainer shape={Shape.Square} src={"https://via.placeholder.com/150"} />
    <ImageContainer shape={Shape.Circle} src={"https://via.placeholder.com/150"} />
    <ImageContainer shape={Shape.Rectangle} src={"https://via.placeholder.com/150"} />
</>
```