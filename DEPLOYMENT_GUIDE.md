# 🚀 Luffy Food Delivery Platform - Render Deployment Guide

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub repository: `https://github.com/manritz2/FDP.git`
- ✅ Render account (sign up at https://render.com)
- ✅ MongoDB Atlas account with connection string
- ✅ All code pushed to GitHub

---

## 🎯 Deployment Strategy

We'll deploy both services on Render:
1. **Backend** - Node.js Web Service
2. **Frontend** - Static Site

---

## 📝 Step-by-Step Deployment Instructions

### **Step 1: Deploy Backend Service**

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Click **"New +"** → **"Web Service"**

2. **Connect GitHub Repository**
   - Select **"Build and deploy from a Git repository"**
   - Click **"Connect GitHub"** (if not already connected)
   - Find and select: `manritz2/FDP`
   - Click **"Connect"**

3. **Configure Backend Service**
   - **Name**: `luffy-backend` (or any name you prefer)
   - **Region**: Choose closest to your users (e.g., Oregon, Frankfurt)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (or choose paid for better performance)

4. **Add Environment Variables**
   Click **"Advanced"** → **"Add Environment Variable"** and add:
   
   | Key | Value | Notes |
   |-----|-------|-------|
   | `PORT` | `5000` | Port number |
   | `MONGO_URI` | `mongodb+srv://iammani247_db_user:Lk5FEjUG8cVPnzvd@cluster0.dg6ueoz.mongodb.net/foodordering?retryWrites=true&w=majority` | Your MongoDB connection string |
   | `JWT_SECRET` | `your_super_secret_jwt_key_here_change_this` | Create a strong random string |
   | `NODE_ENV` | `production` | Environment mode |
   | `FRONTEND_URL` | `https://luffy-frontend.onrender.com` | Will update after frontend deployment |

   ⚠️ **Important**: Change the JWT_SECRET to a secure random string!

5. **Deploy Backend**
   - Click **"Create Web Service"**
   - Wait for deployment (usually 2-5 minutes)
   - Once deployed, copy the backend URL (e.g., `https://luffy-backend.onrender.com`)

---

### **Step 2: Deploy Frontend Service**

1. **Create New Static Site**
   - Go back to Render Dashboard
   - Click **"New +"** → **"Static Site"**

2. **Connect Same Repository**
   - Select your repository: `manritz2/FDP`
   - Click **"Connect"**

3. **Configure Frontend Service**
   - **Name**: `luffy-frontend` (or any name you prefer)
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`

4. **Add Environment Variable**
   Click **"Advanced"** → **"Add Environment Variable"**:
   
   | Key | Value |
   |-----|-------|
   | `REACT_APP_API_URL` | `https://luffy-backend.onrender.com/api` |
   
   ⚠️ **Replace with your actual backend URL from Step 1**

5. **Configure Redirects/Rewrites**
   - Click **"Redirects/Rewrites"**
   - Add rule:
     - **Source**: `/*`
     - **Destination**: `/index.html`
     - **Status**: `200` (Rewrite)

6. **Deploy Frontend**
   - Click **"Create Static Site"**
   - Wait for deployment (usually 3-7 minutes)
   - Once deployed, copy the frontend URL (e.g., `https://luffy-frontend.onrender.com`)

---

### **Step 3: Update Backend CORS Settings**

1. **Update FRONTEND_URL in Backend**
   - Go to your backend service in Render
   - Click **"Environment"**
   - Update `FRONTEND_URL` to your actual frontend URL
   - Click **"Save Changes"**
   - Backend will auto-redeploy

---

## 🔧 Alternative: Blueprint Deployment (Faster Method)

Render supports deploying both services at once using the `render.yaml` file already in your repository!

1. **Go to Render Dashboard**
   - Click **"New +"** → **"Blueprint"**

2. **Connect Repository**
   - Select `manritz2/FDP`
   - Render will automatically detect `render.yaml`

3. **Configure Services**
   - Review the two services (backend & frontend)
   - Add environment variables for each service as listed above

4. **Deploy**
   - Click **"Apply"**
   - Both services will deploy simultaneously!

---

## ✅ Post-Deployment Checklist

- [ ] Backend service is live and accessible
- [ ] Frontend service is live and accessible
- [ ] Test user registration on frontend
- [ ] Test user login
- [ ] Test menu browsing
- [ ] Test adding items to cart
- [ ] Test order placement
- [ ] Check browser console for any errors
- [ ] Verify API calls are hitting the correct backend URL

---

## 🐛 Troubleshooting

### **Issue: Frontend can't connect to Backend**
**Solution**: 
- Verify `REACT_APP_API_URL` in frontend environment variables
- Check CORS settings in backend
- Ensure `FRONTEND_URL` is set correctly in backend

### **Issue: Build fails**
**Solution**:
- Check build logs in Render dashboard
- Verify all dependencies are in `package.json`
- Ensure Node.js version compatibility

### **Issue: Free tier services sleep after inactivity**
**Solution**:
- Use a service like UptimeRobot to ping your backend every 5 minutes
- Or upgrade to paid tier for 24/7 uptime

### **Issue: MongoDB connection fails**
**Solution**:
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check MongoDB connection string is correct
- Ensure database user has proper permissions

---

## 📊 Monitoring Your Deployment

- **Render Dashboard**: Monitor logs, metrics, and deployments
- **MongoDB Atlas**: Track database usage and connections
- **Browser DevTools**: Check network requests and console logs

---

## 🔄 Updating Your Deployment

To update your deployed application:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. Render will automatically detect changes and redeploy! 🎉

---

## 💡 Tips for Production

1. **Use Custom Domain** (Optional)
   - Add your own domain in Render settings
   - Point DNS to Render's nameservers

2. **Enable HTTPS**
   - Render provides free SSL certificates automatically

3. **Set Up Health Checks**
   - Configure health check endpoints for monitoring

4. **Enable Auto-Deploy**
   - Already enabled by default when connected to GitHub

---

## 🎉 You're All Set!

Your Luffy Food Delivery Platform is now live on Render!

**Frontend URL**: `https://your-frontend.onrender.com`
**Backend URL**: `https://your-backend.onrender.com`

Share your app with the world! 🌍⚓

---

## 📞 Need Help?

- **Render Docs**: https://render.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **React Deployment**: https://create-react-app.dev/docs/deployment

Happy Deploying! 🚀
