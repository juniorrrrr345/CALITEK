# 🚀 Guide de Déploiement CALITEK sur Vercel

## ✅ Étapes de déploiement

### 1. Préparer le repository GitHub

```bash
# Si ce n'est pas déjà fait, créez un nouveau repository sur GitHub
# Puis poussez le code :
git remote add origin https://github.com/VOTRE_USERNAME/CALITEK.git
git branch -M main
git push -u origin main
```

### 2. Déployer sur Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Cliquez sur **"New Project"**
3. Importez votre repository GitHub **CALITEK**
4. **IMPORTANT** : Ajoutez les variables d'environnement

### 3. Variables d'environnement

Dans Vercel, allez dans **Settings → Environment Variables** et ajoutez :

```
MONGODB_URI=mongodb+srv://calitkekj:mBPviTkb8X2Wqasb@calitek.vuwxigi.mongodb.net/?retryWrites=true&w=majority&appName=calitek
CLOUDINARY_URL=cloudinary://819599378662878:XZ4-vYj9x2hK9XCjofKQIKGJIqI@dz179lycp
CLOUDINARY_CLOUD_NAME=dz179lycp
CLOUDINARY_API_KEY=819599378662878
CLOUDINARY_API_SECRET=XZ4-vYj9x2hK9XCjofKQIKGJIqI
ADMIN_USERNAME=admin
ADMIN_PASSWORD=calitek2024
NEXTAUTH_SECRET=calitek_secret_key_2024_secure_random_string
```

### 4. Déployer

Cliquez sur **"Deploy"** et attendez que le déploiement se termine.

## 🎯 Après le déploiement

1. **Accédez à votre boutique** : `https://votre-projet.vercel.app`
2. **Accédez au panel admin** : `https://votre-projet.vercel.app/admin`
   - Username : `admin`
   - Password : `calitek2024`

3. **Configurez votre boutique** :
   - ⚙️ Configuration : Personnalisez le titre, fond, etc.
   - 📦 Produits : Ajoutez vos produits
   - 🏷️ Catégories : Créez vos catégories
   - 📄 Pages : Modifiez Info et Contact
   - 🌐 Réseaux sociaux : Ajoutez vos liens

## 🔧 En cas de problème

1. Vérifiez les logs dans Vercel (Functions → Logs)
2. Assurez-vous que toutes les variables d'environnement sont bien configurées
3. Testez la connexion MongoDB depuis le panel admin

## 📱 Fonctionnalités disponibles

- ✅ Boutique responsive (mobile/desktop)
- ✅ Panel admin complet
- ✅ Upload d'images via Cloudinary
- ✅ Gestion des produits et catégories
- ✅ Pages personnalisables
- ✅ Intégration WhatsApp pour les commandes

---

**CALITEK est maintenant prêt à être déployé ! 🚀**