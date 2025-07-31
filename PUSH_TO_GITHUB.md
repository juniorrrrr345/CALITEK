# 📤 Guide pour pousser CALITEK sur GitHub

## 🔧 Étapes à suivre

### 1. Créer le repository sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Connectez-vous à votre compte
3. Cliquez sur le **+** en haut à droite → **New repository**
4. Nommez le repository : **CALITEK**
5. Laissez-le en **Public** ou **Private** selon votre préférence
6. **NE PAS** initialiser avec README, .gitignore ou license
7. Cliquez sur **Create repository**

### 2. Copier l'URL du repository

GitHub vous montrera une page avec des commandes. Copiez l'URL qui ressemble à :
- HTTPS : `https://github.com/VOTRE_USERNAME/CALITEK.git`
- SSH : `git@github.com:VOTRE_USERNAME/CALITEK.git`

### 3. Pousser le code

Exécutez ces commandes dans le terminal :

```bash
# Remplacez URL_DU_REPOSITORY par l'URL copiée ci-dessus
git remote add origin URL_DU_REPOSITORY

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

### 4. Exemple complet

Si votre username GitHub est "monusername", les commandes seraient :

```bash
git remote add origin https://github.com/monusername/CALITEK.git
git branch -M main
git push -u origin main
```

## ⚠️ Important

- Ce code est **complètement indépendant** de la boutique originale LAMAINVRTR
- Toutes les variables d'environnement sont déjà configurées pour CALITEK
- Le fichier `.env.local` ne sera **PAS** poussé sur GitHub (sécurité)

## 📋 Fichiers importants dans le repository

- `README_CALITEK.md` - Documentation de votre boutique
- `DEPLOIEMENT_CALITEK.md` - Guide de déploiement sur Vercel
- `vercel-env.txt` - Variables d'environnement à copier dans Vercel
- `.env.local` - Variables locales (NON poussé sur GitHub)

## 🚀 Prochaines étapes

Après avoir poussé sur GitHub :
1. Suivez le guide `DEPLOIEMENT_CALITEK.md` pour déployer sur Vercel
2. Configurez votre boutique depuis le panel admin

---

**Votre boutique CALITEK est prête à être déployée ! 🎉**