# 📧 Configuration Email pour le Formulaire

## Pourquoi Resend?

Resend est un service d'envoi d'emails moderne, simple et gratuit (jusqu'à 3000 emails/mois).

## Installation Rapide

### 1. Créer un compte Resend

1. Va sur [resend.com](https://resend.com)
2. Inscris-toi gratuitement
3. Vérifie ton email

### 2. Obtenir ta clé API

1. Dans le dashboard Resend, va dans **API Keys**
2. Clique sur **Create API Key**
3. Donne-lui un nom (ex: "Baan Rawai Production")
4. Copie la clé (elle commence par `re_...`)

### 3. Ajouter la clé dans CapRover

1. Va dans ton app CapRover
2. Clique sur **App Configs**
3. Scroll jusqu'à **Environment Variables**
4. Ajoute:
   ```
   RESEND_API_KEY=re_ta_cle_ici
   ```
5. Clique sur **Save & Update**

### 4. Vérifier ton domaine (optionnel mais recommandé)

Dans Resend:
1. Va dans **Domains**
2. Clique **Add Domain**
3. Entre ton domaine (ex: `baan-sayiuan.com`)
4. Suis les instructions pour ajouter les DNS records

**Note:** Sans domaine vérifié, les emails seront envoyés depuis `onboarding@resend.dev` (ça marche mais moins pro).

## Test

Une fois configuré, remplis le formulaire sur le site. Tu devrais recevoir un email à **veltzlucie@gmail.com** avec toutes les infos.

## Dépannage

### Les emails n'arrivent pas?

1. Vérifie que `RESEND_API_KEY` est bien dans CapRover
2. Redémarre l'app dans CapRover
3. Vérifie les logs dans CapRover (cherche "Form submission")
4. Vérifie tes spams

### Mode Dev (sans Resend)

Si tu n'as pas encore configuré Resend, le formulaire fonctionne quand même! Les données sont juste loggées dans la console (visible dans les logs CapRover).

## Coût

- **Gratuit** jusqu'à 3000 emails/mois
- Largement suffisant pour un site de villa privée

## Alternative: Sans Email

Si tu ne veux pas configurer d'emails, le formulaire stocke déjà les réponses dans le localStorage du navigateur. Les guests peuvent aussi te WhatsApp directement avec leurs infos.
