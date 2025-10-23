# Wii Studio - SaaS Interne

Plateforme collaborative interne pour Wii Studio, permettant aux équipes (SEO, rédaction, design, dev, marketing) de partager, organiser et gérer leurs contenus et projets.

## Stack Technologique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Base de données**: PostgreSQL
- **ORM**: Prisma
- **Authentification**: NextAuth.js v5
- **Styling**: TailwindCSS
- **Déploiement**: Vercel

## Fonctionnalités

### Authentification & Gestion des utilisateurs
- Inscription et connexion avec email/mot de passe
- 5 rôles utilisateurs : Admin, Rédacteur, Designer, Développeur, Marketeur
- Système de permissions par rôle
- Profils utilisateurs

### Dashboard
- Vue d'ensemble des projets et contenus
- Statistiques en temps réel
- Activité récente
- Dark/Light mode

### Module Articles de Blog
- CRUD complet (Créer, Lire, Modifier, Supprimer)
- Champs SEO (meta title, meta description)
- Gestion du statut (Brouillon, En cours, En révision, Validé, Publié)
- Génération automatique de slug
- Filtres et recherche

### Modules à venir
- **Pages Web**: Gestion des pages rédigées
- **Projets**: Création et suivi de projets clients
- **Fichiers**: Upload et partage de fichiers
- **Commentaires**: Collaboration sur les contenus
- **Notifications**: Alertes en temps réel

## Installation

### Prérequis
- Node.js 18+
- PostgreSQL
- npm ou yarn

### Configuration

1. Clonez le repository
```bash
git clone <repository-url>
cd saas-wii-studio
```

2. Installez les dépendances
```bash
npm install --legacy-peer-deps
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
```

Modifiez `.env` avec vos informations :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/wii_studio?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-key"
```

4. Initialisez la base de données
```bash
# Note: Les commandes Prisma nécessitent une connexion réseau
# Si vous rencontrez des erreurs, utilisez ces variables d'environnement :
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma db push
```

5. Lancez le serveur de développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## Structure du projet

```
saas-wii-studio/
├── app/                      # App Router (Next.js 14)
│   ├── api/                  # API Routes
│   │   ├── auth/            # Authentification
│   │   └── articles/        # CRUD Articles
│   ├── dashboard/           # Pages du dashboard
│   │   ├── articles/        # Module Articles
│   │   ├── pages/           # Module Pages (à venir)
│   │   ├── projects/        # Module Projets (à venir)
│   │   └── files/           # Module Fichiers (à venir)
│   ├── login/               # Page de connexion
│   └── signup/              # Page d'inscription
├── components/              # Composants React
│   ├── ui/                  # Composants UI réutilisables
│   ├── layout/              # Layout components
│   └── providers/           # Context providers
├── lib/                     # Utilitaires
│   └── prisma.ts           # Client Prisma
├── prisma/                  # Configuration Prisma
│   └── schema.prisma       # Schéma de base de données
├── types/                   # Types TypeScript
└── public/                  # Assets statiques
```

## Utilisation

### Créer un compte
1. Allez sur `/signup`
2. Remplissez le formulaire avec vos informations
3. Sélectionnez votre rôle
4. Cliquez sur "Créer un compte"

### Se connecter
1. Allez sur `/login`
2. Entrez votre email et mot de passe
3. Vous serez redirigé vers le dashboard

### Créer un article
1. Depuis le dashboard, cliquez sur "Articles" dans la sidebar
2. Cliquez sur "Nouvel article"
3. Remplissez les informations :
   - Titre (le slug sera généré automatiquement)
   - Meta title et meta description pour le SEO
   - Contenu de l'article
   - Statut
4. Cliquez sur "Créer l'article"

### Modifier un article
1. Dans la liste des articles, cliquez sur "Modifier"
2. Modifiez les informations souhaitées
3. Cliquez sur "Mettre à jour"

## Schéma de base de données

Le schéma Prisma inclut les modèles suivants :

- **User**: Utilisateurs de la plateforme
- **Article**: Articles de blog
- **Page**: Pages web
- **Project**: Projets clients
- **ProjectMember**: Membres assignés aux projets
- **File**: Fichiers uploadés
- **Comment**: Commentaires sur contenus
- **Notification**: Notifications internes
- **Revision**: Historique des révisions
- **Tag**: Tags pour articles
- **ActivityLog**: Journal d'activité

## Configuration Vercel

Le projet est prêt pour le déploiement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement dans Vercel :
   - `DATABASE_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
3. Déployez !

## Développement futur

### Priorités
1. Implémenter le module Pages Web (similaire aux Articles)
2. Créer le système de gestion de projets
3. Ajouter l'upload de fichiers avec stockage (Supabase/AWS S3)
4. Implémenter les commentaires et mentions
5. Système de notifications en temps réel
6. Historique des révisions
7. Permissions granulaires par rôle
8. Recherche globale
9. Exports (PDF, CSV)
10. Intégrations (Slack, Email, etc.)

### Améliorations UI/UX
- Éditeur de texte riche (ex: TipTap, Slate)
- Prévisualisation des articles
- Glisser-déposer pour les fichiers
- Drag & drop pour réorganiser
- Raccourcis clavier
- Mode hors ligne

## Contribution

Pour contribuer au projet :

1. Créez une branche feature
2. Commitez vos changements
3. Poussez vers la branche
4. Créez une Pull Request

## Support

Pour toute question ou problème :
- Créez une issue sur GitHub
- Contactez l'équipe de développement

## Licence

Propriétaire - Wii Studio

---

Développé avec ❤️ pour Wii Studio
