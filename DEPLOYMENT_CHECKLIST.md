# 🚀 Deployment Checklist

## Pre-Deployment (Complete These First)

### ✅ **1. Code Repository**
- [ ] Initialize Git repository (`git init`)
- [ ] Create `.gitignore` file (✓ Already created)
- [ ] Commit all changes (`git add . && git commit -m "Ready for deployment"`)
- [ ] Create GitHub repository
- [ ] Push code to GitHub (`git push -u origin main`)

### ✅ **2. Environment Variables**
- [ ] Backend `.env` has all required variables:
  - [ ] `MONGO_URI`
  - [ ] `JWT_SECRET`
  - [ ] `PORT`
  - [ ] `FRONTEND_URL`
- [ ] Frontend `.env` has:
  - [ ] `REACT_APP_API_URL`

### ✅ **3. Configuration Files** (All Created ✓)
- [x] `frontend/package.json` - Frontend dependencies
- [x] `render.yaml` - Render deployment config
- [x] `.gitignore` - Git ignore rules
- [x] `README.md` - Project documentation
- [x] `DEPLOYMENT_GUIDE.md` - Detailed deployment steps

### ✅ **4. Code Updates**
- [x] Backend CORS configured for production
- [ ] Test app locally (both frontend and backend)
- [ ] Fix any console errors

---

## Deployment Steps (Render)

### **Option 1: Blueprint Deployment (Recommended)**

1. [ ] Sign up/Login to [Render.com](https://render.com)
2. [ ] Click **"New"** → **"Blueprint"**
3. [ ] Connect your GitHub account
4. [ ] Select your repository
5. [ ] Render detects `render.yaml` automatically
6. [ ] Click **"Apply"**
7. [ ] Set environment variables in Render dashboard:

**Backend Service Environment Variables:**
```
MONGO_URI=mongodb+srv://iammani247_db_user:Lk5FEjUG8cVPnzvd@cluster0.dg6ueoz.mongodb.net/foodordering?retryWrites=true&w=majority
JWT_SECRET=any_long_secret_here
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://YOUR-FRONTEND-URL.onrender.com
```

**Frontend Service Environment Variables:**
```
REACT_APP_API_URL=https://YOUR-BACKEND-URL.onrender.com/api
```

8. [ ] Wait for deployment to complete (5-10 minutes)
9. [ ] Copy backend URL and update `REACT_APP_API_URL` in frontend
10. [ ] Redeploy frontend with updated URL

### **Option 2: Manual Deployment**

#### **Step A: Deploy Backend**
1. [ ] New → Web Service
2. [ ] Connect GitHub repo
3. [ ] Configure:
   - Name: `food-ordering-backend`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. [ ] Add environment variables (see above)
5. [ ] Deploy
6. [ ] **Copy the backend URL** (e.g., https://food-ordering-backend.onrender.com)

#### **Step B: Deploy Frontend**
1. [ ] New → Static Site
2. [ ] Connect GitHub repo
3. [ ] Configure:
   - Name: `food-ordering-frontend`
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`
4. [ ] Add environment variable:
   - `REACT_APP_API_URL` = `https://YOUR-BACKEND-URL.onrender.com/api`
5. [ ] Deploy

#### **Step C: Update CORS**
1. [ ] Update backend's `FRONTEND_URL` env variable with your frontend URL
2. [ ] Redeploy backend

---

## Post-Deployment Testing

### ✅ **Test Your Application**
- [ ] Visit your frontend URL
- [ ] Test user registration
- [ ] Test user login
- [ ] Browse menu items
- [ ] Add items to cart
- [ ] Place an order
- [ ] Check order history
- [ ] Test admin panel (if applicable)

### ✅ **Check for Errors**
- [ ] Open browser DevTools (F12)
- [ ] Check Console tab for errors
- [ ] Check Network tab for failed API calls
- [ ] Verify CORS is working (no CORS errors)

### ✅ **Monitor Services**
- [ ] Check Render dashboard for service status
- [ ] Review deployment logs for errors
- [ ] Monitor backend logs for API errors

---

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
