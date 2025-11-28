# Portfolio – Sabrina Bouzidi

Interface web moderne construite avec Next.js pour présenter le profil professionnel, les projets et les moyens de contact de Sabrina Bouzidi.

## Aperçu

- **Structure App Router** avec des pages dédiées (`Accueil`, `À propos`, `Projets`, `Contact`).
- **Design responsive** inspiré d'une approche carte/section mettant l'accent sur la lisibilité.
- **Formulaire de contact** connecté à Formspree pour la gestion des messages.
- **Composants réutilisables** (`ProjectCard`, navigation partagée) pour faciliter l'évolution du site.

## Pile technique

- [Next.js 16](https://nextjs.org/) & [React 19](https://react.dev/)
- [Tailwind CSS v4 (préversion)](https://tailwindcss.com/) via `@tailwindcss/postcss`
- [Formspree](https://formspree.io/) pour la soumission du formulaire de contact

## Prise en main

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run start
```

- L'application démarre sur `http://localhost:3000` (ou sur un port libre si 3000 est occupé).
- La plupart des pages se trouvent dans le répertoire `app/` (App Router Next.js).
- Les ressources statiques (images de projets, photo de profil) sont stockées dans `public/`.

## Structure du projet

```
app/
	layout.js        # Layout global (header, footer, métadonnées)
	page.js          # Page d'accueil et section hero
	about/page.js    # Présentation du profil
	projects/page.js # Grille des projets + cartes
	contact/page.js  # Formulaire Formspree et informations de contact
components/
	ProjectCard.js   # Carte projet réutilisable
	Navbar.js        # Navigation (si activée dans le layout)
public/
	projects/        # Visuels des projets
```

## Points de design

- Palette lumineuse avec accents bleus (`--accent`) permettant un fort contraste (`#111`).
- Titres harmonisés (`h1` à `h4`) avec `Inter` et tailles responsives via `clamp`.
- Sections encartées (`card-surface`) offrant profondeur et lisibilité sur grand écran.
- Formulaire modernisé : champs arrondis, focus visibles, bouton gradient.

## Déploiement

Le projet est déployé et hébergé sur Vercel, une plateforme optimisée pour les applications Next.js.

🔗 Lien du site en ligne :
👉 Deployment
site-portfolio-sdw8n4ttu-sabrinas-projects-d6fb8bf5.vercel.app
👉 Domains
site-portfolio-sigma-sooty.vercel.app

Le déploiement a été effectué via Vercel après liaison du dépôt GitHub.
La plateforme se charge automatiquement de :

lancer la commande de build (next build)

gérer la sortie .next

réexécuter un déploiement à chaque git push

Les variables d'environnement nécessaires (par exemple : clé Formspree) peuvent être configurées depuis Vercel → Project Settings → Environment Variables.


