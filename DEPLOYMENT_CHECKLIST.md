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

### **Build Fails:**
- Check Render build logs
- Ensure `package.json` has all dependencies
- Verify Node version compatibility

### **Frontend Can't Connect to Backend:**
- Verify `REACT_APP_API_URL` is correct
- Check backend is running (green in Render)
- Review backend logs for errors

### **CORS Errors:**
- Verify `FRONTEND_URL` is set in backend
- Check CORS configuration in `server.js`
- Ensure URLs include `https://` (not `http://`)

### **Database Connection Fails:**
- Verify `MONGO_URI` is correct
- Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Review backend logs for connection errors

---

## Alternative Platforms

If Render doesn't work, try:

### **Railway** ([railway.app](https://railway.app))
- Similar to Render
- Automatic detection of services
- Easy environment variable management

### **Heroku** ([heroku.com](https://heroku.com))
- Classic platform (no longer free)
- Requires Procfile for deployment

### **Vercel** ([vercel.com](https://vercel.com))
- Great for frontend (Next.js/React)
- Backend as serverless functions

---

## Quick Commands Reference

### **Git Commands:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### **Local Testing:**
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm start
```

---

## Need Help?

- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions
- Review Render documentation: [render.com/docs](https://render.com/docs)
- Check deployment logs in Render dashboard

---

**Good luck with your deployment! 🎉**
