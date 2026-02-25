# Déploiement CapRover avec GitHub Webhook

## 📋 Prérequis
- Compte CapRover actif
- App créée sur CapRover
- Repo GitHub : `https://github.com/gdetaisne/baan-rawai`

## 🚀 Étapes de Configuration

### 1. Créer l'app sur CapRover

Sur votre dashboard CapRover :

1. Aller dans **Apps**
2. Cliquer **Create New App**
3. Nom de l'app : `baan-rawai` (ou autre)
4. Cliquer **Create New App**

### 2. Configurer les variables d'environnement

Dans votre app CapRover, aller dans **App Configs** > **Environment Variables** et ajouter :

```env
NEXT_PUBLIC_WIFI_NAME=VotreNomWiFi
NEXT_PUBLIC_WIFI_PASSWORD=VotreMotDePasse
NEXT_PUBLIC_DOOR_CODE=VotreCode
NEXT_PUBLIC_WHATSAPP_PRIMARY=66952824035
NEXT_PUBLIC_WHATSAPP_SECONDARY=33633046059
NEXT_PUBLIC_TM0_FORM_URL=https://votrelien.com/tm0
```

### 3. Activer HTTPS

Dans **HTTP Settings** :
- ✅ Enable HTTPS
- ✅ Force HTTPS
- ✅ Websocket Support (optionnel)

### 4. Configurer le Webhook GitHub

#### A) Récupérer l'URL du webhook CapRover

Dans votre app CapRover :
1. Aller dans **Deployment** > **Deploy from Github/Bitbucket/Gitlab**
2. Copier l'URL du webhook qui ressemble à :
   ```
   https://captain.votredomaine.com/api/v2/user/apps/webhooks/triggerbuild?namespace=captain&token=VOTRE_TOKEN
   ```

#### B) Configurer sur GitHub

1. Aller sur votre repo : `https://github.com/gdetaisne/baan-rawai`
2. **Settings** > **Webhooks** > **Add webhook**
3. Remplir :
   - **Payload URL** : L'URL copiée de CapRover
   - **Content type** : `application/json`
   - **Which events would you like to trigger this webhook?** : 
     - ✅ Just the push event
   - **Active** : ✅ Coché
4. Cliquer **Add webhook**

### 5. Premier déploiement manuel (optionnel)

Si vous voulez déployer tout de suite sans attendre un push :

1. Dans CapRover, aller dans **Deployment**
2. Section **Method 3: Deploy from Github/Bitbucket/Gitlab**
3. Entrer :
   - **Repository** : `gdetaisne/baan-rawai`
   - **Branch** : `main`
   - **Username** : votre username GitHub
   - **Password** : votre Personal Access Token GitHub
4. Cliquer **Deploy Now**

### 6. Créer un GitHub Personal Access Token (si nécessaire)

Si vous n'avez pas encore de token :

1. GitHub > **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. **Generate new token (classic)**
3. Nom : `CapRover baan-rawai`
4. Scopes :
   - ✅ `repo` (full control)
5. **Generate token**
6. **Copier le token** (vous ne le reverrez plus !)

## ✅ Test du Webhook

Maintenant, chaque fois que vous pushez sur `main` :

```bash
git add .
git commit -m "Mon changement"
git push
```

→ CapRover va automatiquement :
1. Recevoir le webhook de GitHub
2. Clone le repo
3. Build le Dockerfile
4. Deploy la nouvelle version

## 🔍 Voir les logs

Dans CapRover > votre app > **App Logs** pour voir les déploiements en temps réel.

## 🌐 URL de votre site

Une fois déployé, votre site sera accessible à :
- `https://baan-rawai.votredomaine.com` (ou selon votre config CapRover)

## 🐛 Troubleshooting

### Build failed
- Vérifier les logs dans CapRover
- Vérifier que toutes les env vars sont bien définies
- Vérifier que le Dockerfile est correct

### Webhook ne fonctionne pas
- Vérifier l'URL du webhook sur GitHub
- Vérifier que le webhook est "Active"
- Aller sur GitHub > Settings > Webhooks > Votre webhook > Recent Deliveries pour voir les erreurs

### Images ne s'affichent pas
- Vérifier que les images sont bien dans `/public`
- Vérifier les logs Next.js

---

🎉 **C'est tout !** Votre site se déploie maintenant automatiquement à chaque push sur main !
