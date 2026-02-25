# Baan Rawai - Deployment Guide

## Environment Variables

### Required for Private Mode
```bash
PRIVATE_ACCESS_CODE=2026
DOOR_CODE="Touch screen with palm 5934 touch screen with palm (you must hear Lock Open )"
WIFI_PASSWORD=minoumi123!
WIFI_NETWORK=Minou_5G
```

### Optional for Email (Guest Form)
```bash
RESEND_API_KEY=your_resend_api_key_here
```

## CapRover Deployment

### 1. Set Environment Variables in CapRover
Go to your app settings and add all environment variables above.

### 2. Webhook is Already Configured
The GitHub webhook triggers automatic deployments on push to `main`.

### 3. Email Setup (Optional)
To enable email notifications for the guest form:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to CapRover environment variables
4. Verify your domain (or use their test domain for development)

**Note:** Without Resend API key, form submissions will still work but won't send emails. They'll be logged to console instead (dev mode).

## Guest Form Popup

The popup automatically shows:
- After 5 seconds on first visit
- Can be manually triggered by clicking "Prepare your stay" button
- Tracks completion in localStorage
- Won't show again after submission

## Video Assets

The hero uses `/IMG_0646.MOV` as the main video. Make sure this file exists in `/public`.

## Testing Locally

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your values
# Then run dev server
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Email Destination

All guest form submissions are sent to: **veltzlucie@gmail.com**

This is hardcoded in `/app/api/guest-form/route.ts`. To change it, edit line 30.
