# Guide d'installation - Wii Studio SaaS

## Installation rapide

### 1. Prérequis
- Node.js 18 ou supérieur
- PostgreSQL 14 ou supérieur
- npm

### 2. Installation des dépendances

```bash
npm install --legacy-peer-deps
```

> Note: `--legacy-peer-deps` est nécessaire car Next.js 16 est très récent et certaines dépendances (NextAuth.js) n'ont pas encore été mises à jour pour supporter cette version.

### 3. Configuration de la base de données

#### Option A : PostgreSQL local

1. Créez une base de données PostgreSQL :
```sql
CREATE DATABASE wii_studio;
```

2. Créez un fichier `.env` :
```bash
cp .env.example .env
```

3. Modifiez le `.env` avec vos informations :
```env
DATABASE_URL="postgresql://username:password@localhost:5432/wii_studio?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-unique-ici"
```

#### Option B : Base de données hébergée (Supabase, Planetscale, etc.)

1. Créez un projet sur Supabase ou Planetscale
2. Copiez l'URL de connexion fournie
3. Mettez à jour `DATABASE_URL` dans `.env`

### 4. Initialisation de Prisma

```bash
# Générer le client Prisma
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate

# Créer les tables dans la base de données
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma db push
```

> Note: La variable d'environnement `PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1` est utilisée pour contourner les problèmes de téléchargement des engines Prisma si vous êtes dans un environnement restreint.

### 5. (Optionnel) Seed de la base de données

Si vous souhaitez créer un utilisateur admin par défaut :

```bash
# Créez un fichier prisma/seed.ts
# Puis exécutez :
npx prisma db seed
```

### 6. Lancement du serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## Première utilisation

1. Allez sur `http://localhost:3000`
2. Cliquez sur "Créer un compte"
3. Remplissez le formulaire :
   - Nom complet
   - Email
   - Mot de passe (min. 6 caractères)
   - Rôle (choisissez "Administrateur" pour le premier compte)
4. Cliquez sur "Créer un compte"
5. Vous serez redirigé vers la page de connexion
6. Connectez-vous avec vos identifiants

## Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm run start

# Linting
npm run lint

# Prisma Studio (interface graphique pour la BDD)
npx prisma studio

# Générer le client Prisma après modification du schéma
npx prisma generate

# Appliquer les modifications du schéma à la BDD
npx prisma db push

# Créer une migration
npx prisma migrate dev --name nom_de_la_migration

# Réinitialiser la base de données (⚠️ supprime toutes les données)
npx prisma migrate reset
```

## Résolution de problèmes

### Erreur : "Cannot find module '@prisma/client'"
```bash
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate
```

### Erreur : "Connection refused" avec PostgreSQL
- Vérifiez que PostgreSQL est démarré
- Vérifiez les informations de connexion dans `.env`
- Testez la connexion avec `psql` ou un client PostgreSQL

### Erreur : Peer dependency avec NextAuth
C'est normal, utilisez `--legacy-peer-deps` lors de l'installation de nouvelles dépendances :
```bash
npm install <package> --legacy-peer-deps
```

### L'application ne démarre pas
1. Vérifiez que toutes les variables d'environnement sont définies dans `.env`
2. Vérifiez que PostgreSQL est accessible
3. Supprimez `node_modules` et `.next` puis réinstallez :
```bash
rm -rf node_modules .next
npm install --legacy-peer-deps
npm run dev
```

## Déploiement sur Vercel

1. Poussez votre code sur GitHub
2. Connectez-vous à Vercel
3. Importez votre repository
4. Configurez les variables d'environnement :
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (URL de votre site Vercel)
   - `NEXTAUTH_SECRET`
5. Déployez !

Vercel détectera automatiquement Next.js et appliquera la configuration optimale.

## Structure des rôles

- **ADMIN** : Accès complet, peut gérer les utilisateurs
- **REDACTEUR** : Peut créer et modifier des articles et pages
- **DESIGNER** : Peut uploader des fichiers, créer des designs
- **DEVELOPPEUR** : Accès technique aux projets
- **MARKETEUR** : Peut gérer les projets et les contenus marketing

## Support

En cas de problème :
1. Vérifiez ce guide
2. Consultez le README.md
3. Créez une issue sur GitHub
4. Contactez l'équipe de développement

Bon développement ! 🚀
