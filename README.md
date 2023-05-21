# Dose reminder for Nova Nordisk Sogroya® pen injector

## Description

- 💊 A single-page application (SPA) that reminds the user to take their daily dose of Sogroya®.
- 🛠️ Built with SvelteKit and TailwindCSS
- 🚀 Deployed on Vercel (https://dose-reminder.vercel.app)

## Development

1. Install dependencies `pnpm i`
2. Copy file `.env.example` to `.env` and fill it with values
3. Run the development server `pnpm dev`
4. Commit to the `main` branch to deploy to Vercel

## Deployment to another hosting

1. Install dependencies, fill `.env` file and build project `pnpm i && pnpm build`
2. Copy the `build` folder to your hosting
3. Configure your hosting to serve `index.html` for all routes
