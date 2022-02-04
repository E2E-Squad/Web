Profile utilisateur simple

```tsx
<UserCard 
    styleClass="main-user-card" 
    pseudo="Lorem Ipsum" 
    ratingValue={3}
    avatar="https://randomuser.me/api/portraits/lego/1.jpg"
>
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="#ffd700" 
    viewBox="0 0 24 24">
    <path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
</svg>
</UserCard>
```

Profile utilisateur complet

```tsx
<UserCard 
    styleClass="main-user-card--full" 
    pseudo="Lorem Ipsum" 
    ratingValue={4.5}
    avatar="https://randomuser.me/api/portraits/lego/2.jpg"
    rank="6H"
    location="Lausanne"
>
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="#ffd700" 
    viewBox="0 0 24 24">
    <path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
</svg>
</UserCard>
```