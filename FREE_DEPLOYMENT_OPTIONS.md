# Deployment options

This repository includes a Render Blueprint configuration (`render.yaml`) and Render-focused deployment instructions. For the simplest setup, use the existing Render Blueprint and follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

## Options

- **Render:** The repository's currently configured deployment path for the frontend and backend.
- **Vercel (frontend) + Render (backend):** A split-hosting option. Configure `REACT_APP_API_URL` on the frontend and `FRONTEND_URL` on the backend.
- **Other providers:** The app uses a React frontend and Node.js backend, so providers supporting those runtimes may work. Check their current pricing, free-tier rules, and deployment requirements before choosing one.

Provider pricing and free-tier availability can change; confirm current terms directly with the provider before deploying.
