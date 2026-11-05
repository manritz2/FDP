# Deployment Checklist

## Before deployment

- [ ] Push the application code to GitHub.
- [ ] Create a MongoDB Atlas database and store its connection string securely.
- [ ] Set `MONGO_URI`, a strong `JWT_SECRET`, `NODE_ENV=production`, and `FRONTEND_URL` as backend environment variables.
- [ ] Set `REACT_APP_API_URL` as the frontend environment variable.
- [ ] Do not commit credentials or production secrets to this repository.

## Deploy with the configured Render Blueprint

1. Sign in to Render and create a Blueprint from this repository.
2. Render will read the included `render.yaml` and configure the frontend and backend services.
3. Set the required environment variables in the Render dashboard. Use your actual service URLs for `FRONTEND_URL` and `REACT_APP_API_URL`.
4. Apply the Blueprint and wait for both services to finish deploying.
5. If the generated service URLs differ from the values configured initially, update the environment variables and redeploy.

For manual setup or additional details, follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) and [QUICK_DEPLOY.md](./QUICK_DEPLOY.md).

## Verify the deployment

- [ ] Open the frontend URL.
- [ ] Test registration and login.
- [ ] Browse menu items and add an item to the cart.
- [ ] Test order placement and order history.
- [ ] Check browser developer tools for failed API requests or CORS errors.
- [ ] Review service logs in the provider dashboard.

## Troubleshooting

- **Frontend cannot connect to the backend:** Verify `REACT_APP_API_URL` includes the backend URL and `/api` path.
- **CORS errors:** Verify `FRONTEND_URL` matches the deployed frontend URL exactly.
- **Database connection fails:** Check `MONGO_URI`, database credentials, and MongoDB Atlas network access.
- **Build or startup fails:** Review the provider's build logs and confirm each service's root directory and commands match the repository configuration.

Deployment pricing, free-tier limits, and provider features can change; confirm current terms with the provider.
