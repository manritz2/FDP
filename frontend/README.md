# Food Ordering Frontend

A minimal React + Vite frontend.

Install dependencies:

npm install

Run dev server:

npm run dev

The app expects the backend at http://localhost:5000 by default.
 
Seeding sample data (dev)

You can seed sample products and an admin user by POSTing to the backend `/api/seed` endpoint. Example JSON:

{
	"items": [ { "name": "Burger", "description": "Beef burger", "price": 6.5 } ],
	"admin": { "email": "admin@local", "password": "admin" }
}

Use a tool like Postman or curl.
