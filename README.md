# PWA Push Notifications Demo

A Progressive Web App that demonstrates push notifications functionality.

## Features

- PWA installation prompt
- Push notification subscription
- Automatic updates
- Tailwind CSS styling
- Vercel deployment ready

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your VAPID keys:
   ```
   NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_public_key
   VAPID_PRIVATE_KEY=your_private_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in your Vercel project settings
4. Deploy!

## Development

- The app uses Next.js 14 with App Router
- Tailwind CSS for styling
- next-pwa for PWA functionality
- web-push for push notifications

## Notes

- Push notifications only work in production (HTTPS)
- Make sure to generate your own VAPID keys for production use
- The app will prompt users to install the PWA automatically
# pwa-push-notifications-v2
