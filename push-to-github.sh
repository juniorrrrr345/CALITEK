#!/bin/bash

echo "🚀 Script de déploiement CALITEK sur GitHub"
echo "=========================================="
echo ""
echo "⚠️  IMPORTANT: Assurez-vous d'avoir créé le repository CALITEK sur GitHub d'abord!"
echo ""
echo "Entrez l'URL de votre repository GitHub CALITEK:"
echo "Exemple: https://github.com/votre-username/CALITEK.git"
read -p "URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Erreur: URL vide"
    exit 1
fi

echo ""
echo "📤 Ajout du remote origin..."
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL

echo "🔄 Renommage de la branche en main..."
git branch -M main

echo "📤 Push vers GitHub..."
git push -u origin main

echo ""
echo "✅ Terminé! Votre code est maintenant sur GitHub!"
echo ""
echo "🎯 Prochaines étapes:"
echo "1. Allez sur Vercel.com"
echo "2. Importez le repository CALITEK"
echo "3. Ajoutez les variables d'environnement du fichier vercel-env.txt"
echo "4. Déployez!"
echo ""
echo "📚 Consultez DEPLOIEMENT_CALITEK.md pour plus de détails"