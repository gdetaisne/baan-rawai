# Environment Variables Setup

## Local Development

Create a file `.env.local` at the root with these values:

```env
# Public configuration
NEXT_PUBLIC_WIFI_NETWORK=Minou_5G
NEXT_PUBLIC_TM0_FORM_URL=

# Private secrets (DO NOT expose as NEXT_PUBLIC_)
PRIVATE_ACCESS_CODE=2026
DOOR_CODE=Touch screen with palm 5934 touch screen with palm (you must hear Lock Open)
WIFI_PASSWORD=minoumi123!
```

## CapRover Deployment

In your CapRover app settings, add these environment variables:

### App Configs > Environment Variables

```
NEXT_PUBLIC_WIFI_NETWORK=Minou_5G
NEXT_PUBLIC_TM0_FORM_URL=
PRIVATE_ACCESS_CODE=2026
DOOR_CODE=Touch screen with palm 5934 touch screen with palm (you must hear Lock Open)
WIFI_PASSWORD=minoumi123!
```

## How it works

- **NEXT_PUBLIC_WIFI_NETWORK**: Visible to everyone (the network name)
- **WIFI_PASSWORD**: Only accessible after entering private mode passcode (2026)
- **DOOR_CODE**: Only accessible after entering private mode passcode (2026)
- **PRIVATE_ACCESS_CODE**: The passcode guests need to unlock private info

## Testing Private Mode

1. Go to "Before you arrive" section
2. Click "Private" button (top right)
3. Enter passcode: **2026**
4. Door code and WiFi password will now be visible

## Security

- Secrets are never exposed in HTML source
- API route validates passcode server-side
- Rate limiting prevents brute force (5 attempts per 15 minutes)
- Unlock state stored in sessionStorage (cleared on browser close)
