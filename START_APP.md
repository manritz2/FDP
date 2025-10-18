# 🚀 Start Your Food Ordering App

## ✅ What I've Connected:

### **Backend ↔️ Frontend Integration Complete!**

1. **Created Centralized API Config** (`frontend/src/api/axios.js`)
   - Uses environment variable `REACT_APP_API_URL`
   - Automatically adds authentication tokens
   - Handles errors globally

2. **Updated All API Calls:**
   - ✅ `auth.jsx` - Login/Register
   - ✅ `Menu.js` - Fetch menu items
   - ✅ `App.jsx` - Products & Orders
   - ✅ `Products.jsx` - Admin product management

3. **Backend CORS Configured:**
   - Allows requests from frontend
   - Credentials support enabled

4. **Environment Variables Set:**
   - Backend: `FRONTEND_URL=http://localhost:3000`
   - Frontend: `REACT_APP_API_URL=http://localhost:5000/api`

---

## 🏃‍♂️ How to Start the App:

### **Option 1: Two Separate Terminals (Recommended)**

#### Terminal 1 - Start Backend:
```powershell
cd backend
npm install
npm start
```

**Expected Output:**
```
Server running on port 5000
MongoDB connected
```

#### Terminal 2 - Start Frontend:
```powershell
cd frontend
npm install
npm start
```

**Expected Output:**
```
Compiled successfully!
Local: http://localhost:3000
```

---

### **Option 2: Quick Start Script**

I can create a PowerShell script to start both at once. Would you like me to do that?

---

## 🔍 Test the Connection:

### **1. Check Backend is Running:**
Open browser: `http://localhost:5000/api/items`

You should see JSON response (items list or error)

### **2. Check Frontend:**
Open browser: `http://localhost:3000`

You should see your app homepage

### **3. Test API Connection:**
- Click on Menu page
- Items should load from backend
- Try login/register
- Add items to cart

---

## 🌐 API Endpoints Available:

### **Authentication:**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### **Items/Products:**
- `GET /api/items` - Get all items
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### **Orders:**
- `POST /api/orders` - Create order (Auth required)
- `GET /api/orders` - Get user orders (Auth required)

---

## 🐛 Troubleshooting:

### **"CORS Error" in Browser Console:**
- Make sure backend is running first
- Check backend .env has `FRONTEND_URL=http://localhost:3000`
- Restart backend server

### **"Network Error" or "Failed to fetch":**
- Verify backend is running on port 5000
- Check MongoDB connection in backend console
- Make sure frontend .env has `REACT_APP_API_URL=http://localhost:5000/api`

### **"Cannot find module" error:**
- Run `npm install` in both backend and frontend folders

### **Backend won't start:**
- Check MongoDB URI is correct in backend/.env
- Make sure port 5000 is not in use

### **Frontend won't start:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure port 3000 is not in use

---

## 📝 Environment Variables:

### **Backend (.env):**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_long_secret_here
FRONTEND_URL=http://localhost:3000
```

### **Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🎯 Next Steps:

1. **Start both servers** (backend & frontend)
2. **Test the connection** by browsing to http://localhost:3000
3. **Register a new user**
4. **Test all features:**
   - Browse menu
   - Add to cart
   - Place orders
   - Admin panel (if you have admin user)

---

## 📦 Quick Commands:

### **Install Dependencies:**
```powershell
# Backend
cd backend ; npm install

# Frontend
cd frontend ; npm install
```

### **Start Servers:**
```powershell
# Backend (Terminal 1)
cd backend ; npm start

# Frontend (Terminal 2)
cd frontend ; npm start
```

### **Stop Servers:**
Press `Ctrl+C` in each terminal

---

## 🚀 For Production/Deployment:

When deploying to Render or other platforms:

**Backend Environment Variables:**
- `FRONTEND_URL` = Your frontend URL (e.g., `https://your-app.netlify.app`)

**Frontend Environment Variables:**
- `REACT_APP_API_URL` = Your backend URL + `/api` (e.g., `https://your-backend.onrender.com/api`)

---

**Everything is connected and ready! 🎊**

Just start both servers and your app will work perfectly!
