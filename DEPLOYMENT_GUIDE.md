# Deployment Guide - Render (Full Stack)

## 🚀 Deploy Both Frontend & Backend to Render

### **Prerequisites:**
1. A Render account ([render.com](https://render.com))
2. Your code in a Git repository (GitHub, GitLab, or Bitbucket)
3. MongoDB Atlas account (you already have this setup)

---

## **Step-by-Step Deployment Instructions:**

### **Step 1: Push Your Code to GitHub**

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - ready for deployment"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

---

### **Step 2: Deploy on Render**

#### **Option A: Using render.yaml (Recommended - Both services together)**

1. Go to [render.com](https://render.com) and sign in
2. Click **"New"** → **"Blueprint"**
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Configure environment variables:
   - **MONGO_URI**: Your MongoDB connection string
   - **JWT_SECRET**: Your JWT secret key
   - **REACT_APP_API_URL**: Will be set after backend is deployed (e.g., https://food-ordering-backend.onrender.com/api)
6. Click **"Apply"**

#### **Option B: Manual Deployment (Step by step)**

##### **Deploy Backend First:**

1. Go to Render Dashboard → **"New"** → **"Web Service"**
2. Connect your repository
3. Configure:
   - **Name**: `food-ordering-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
4. Add Environment Variables:
   - `PORT` = `5000`
   - `MONGO_URI` = `your_mongodb_connection_string`
   - `JWT_SECRET` = `your_jwt_secret`
   - `NODE_ENV` = `production`
5. Click **"Create Web Service"**
6. **COPY THE BACKEND URL** (e.g., `https://food-ordering-backend.onrender.com`)

##### **Deploy Frontend:**

1. Go to Render Dashboard → **"New"** → **"Static Site"**
2. Connect your repository
3. Configure:
   - **Name**: `food-ordering-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://YOUR-BACKEND-URL.onrender.com/api`
5. Click **"Create Static Site"**

---

### **Step 3: Update CORS in Backend**

After deployment, update your backend's CORS settings to allow requests from your frontend URL.

In `backend/server.js`, update the CORS configuration:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

Add `FRONTEND_URL` environment variable in Render backend settings:
- `FRONTEND_URL` = `https://your-frontend-url.onrender.com`

---

## **Important Notes:**

### **Free Tier Limitations:**
- Services spin down after 15 minutes of inactivity
- First request after inactivity may take 30-60 seconds (cold start)
- 750 hours/month free (enough for one service running 24/7)

### **Environment Variables:**
Make sure to set these in Render:

**Backend:**
- `MONGO_URI`
- `JWT_SECRET`
- `PORT`
- `NODE_ENV`
- `FRONTEND_URL`

**Frontend:**
- `REACT_APP_API_URL`

---

## **Alternative: Deploy to Railway**

If you prefer Railway (also has free tier):

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Railway will auto-detect both frontend and backend
5. Set environment variables for each service
6. Deploy!

---

## **Testing Your Deployment:**

1. Visit your frontend URL
2. Test user registration/login
3. Test food ordering functionality
4. Check browser console for any CORS or API errors

---

## **Troubleshooting:**

### **CORS Errors:**
- Make sure `FRONTEND_URL` is set correctly in backend
- Check CORS configuration in `server.js`

### **API Not Connecting:**
- Verify `REACT_APP_API_URL` in frontend environment variables
- Check backend logs in Render dashboard

### **Build Fails:**
- Check Render build logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

---

## **Next Steps:**

1. Set up custom domain (optional)
2. Enable HTTPS (automatic on Render)
3. Monitor logs and performance
4. Set up CI/CD for automatic deployments

Good luck with your deployment! 🎉
