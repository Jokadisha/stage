# Architecture du Projet Next.js

Cette documentation décrit la structure du projet et les conventions de développement à respecter.

## 🏗 Structure des fichiers

```plaintext
├── src/
│   ├── app/                # Router Next.js 13+
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Page d'accueil
│   │   └── (routes)/       # Regroupement logique des routes
│   │
│   ├── components/         # Composants UI réutilisables
│   │   ├── ui/            # Composants primitifs (Button, Input...)
│   │   ├── modules/       # Composants complexes combinés
│   │   └── templates/     # Templates de mise en page
│   │
│   ├── features/          # Fonctionnalités métier (organisation par domaine)
│   │   └── auth/          # Exemple : authentification
│   │       ├── components/ # Composants spécifiques
│   │       ├── hooks/     # Hooks custom
│   │       ├── stores/    # State local (Zustand)
│   │       ├── types/     # Types TS
│   │       └── utils/     # Utilitaires
│   │
│   ├── hooks/             # Hooks globaux réutilisables
│   ├── stores/            # State global (Zustand)
│   ├── services/          # Couche d'accès aux données
│   ├── types/             # Types globaux TypeScript
│   ├── utils/             # Utilitaires généraux
│   ├── styles/            # Styles globaux + Tailwind
│   └── public/            # Assets statiques
```

## 📁 Explication des dossiers principaux

### `app/` (Routing Next.js)

- Utilisez le routing système de Next.js 13+
- Groupez les routes logiquement avec `(group-name)`
- Utilisez les Server Components autant que possible

### `components/`

- **ui/** : Composants atomiques réutilisables

  ```tsx
  // Exemple Button.tsx
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
  }
  
  
  export const Button = ({ variant = 'primary', ...props }: ButtonProps) => (
    <button className={`btn-${variant}`} {...props} />
  )
  ```

- **modules/** : Combinaisons de composants UI
- **templates/** : Structures de page réutilisables

### `features/`

- Organisation par fonctionnalité métier (ex: auth, dashboard, products)
- Chaque feature contient son propre écosystème :

  ```plaintext

  features/
    auth/
      components/  # Composants spécifiques
      hooks/       # useLogin, usePasswordReset...
      stores/      # State local avec Zustand
      types/       # Types spécifiques
      utils/       # Helpers métier
  ```

### `stores/` (Zustand)

- Structure type d'un store :

  ```ts
  interface AuthState {
    user: User | null
    login: (email: string, password: string) => Promise<void>
  }

  export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: async (email, password) => {
      const user = await authService.login(email, password)
      set({ user })
    }
  }))
  ```

### `services/`

- Couche d'abstraction pour les appels API :

  ```ts
  // services/apiClient.ts
  export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json' }
  })
  
  // services/authService.ts
  export const authService = {
    login: (credentials) => apiClient.post('/auth/login', credentials)
  }
  ```

## 🛠 Best Practices

### Principes SOLID

- **Single Responsibility** : 1 responsabilité par composant/fichier
- **Open/Closed** : Extensible sans modification
- **Dependency Injection** : Dépendances via props

### TypeScript

- Strict mode activé
- Pas de `any` toléré
- Validation des données externes avec Zod
- Types génériques pour les composants réutilisables

### Performance

- Server Components pour le rendu initial
- Dynamic imports pour les gros composants
- Optimisation des re-renders avec `memo`/`useCallback`

### Tests

- Tests unitaires : `*.test.tsx` à côté des fichiers
- Tests d'intégration : `/__tests__/integration`
- Tests E2E : `/cypress`

## 🎨 Styling (Tailwind CSS)

- Utilisation des classes utilitaires directement
- Création de variants avec `@layer components`
- Variables CSS pour le thème :

  ```css

  :root {
    --color-primary: 79 70 229;
  }
  ```

## 📜 Règles de développement

1. Pas de logique métier dans les composants UI
2. Tests obligatoires pour les nouvelles features
3. Documentation des composants complexes avec Storybook
4. Revue de code avant merge sur `main`
