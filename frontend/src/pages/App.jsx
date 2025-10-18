import React, { useEffect, useState, useContext } from 'react'
import api from '../api/axios'
import { AuthContext, AuthProvider } from '../utils/auth'

function Shop(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('cart')||'[]') }catch{ return [] }
  })
  const { user, token } = useContext(AuthContext)

  useEffect(()=>{
    api.get('/products')
      .then(r=>setProducts(r.data))
      .catch(e=>console.error(e))
  },[])

  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) },[cart])

  function addToCart(p){
    setCart(prev=>{
      const found = prev.find(i=>i._id===p._id)
      if(found) return prev.map(i=>i._id===p._id?{...i, qty:i.qty+1}:i)
      return [...prev,{...p, qty:1}]
    })
  }

  function removeFromCart(id){ setCart(prev=>prev.filter(i=>i._id!==id)) }

  const total = cart.reduce((s,i)=>s + i.price * i.qty,0)

  async function checkout(){
    if (!user) return alert('Please login to checkout')
    try{
      const items = cart.map(i=>({ product: i._id, name: i.name, qty: i.qty, price: i.price }))
      const res = await api.post('/orders', { items, total, address: 'Sample address' })
      alert('Order placed: ' + res.data._id)
      setCart([])
    }catch(err){ console.error(err); alert('Error placing order') }
  }

  return (
    <div className="container">
      <header>
        <h1>Food Ordering</h1>
        <div>
          {user ? <span>Hi, {user.name}</span> : <span>Not signed in</span>}
        </div>
      </header>
      <main>
        <section className="menu">
          <h2>Menu</h2>
          <div className="grid">
            {products.map(p=> (
              <div className="card" key={p._id}>
                <img src={p.image || 'https://via.placeholder.com/150'} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="row">
                  <strong>${p.price.toFixed(2)}</strong>
                  <button onClick={()=>addToCart(p)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="cart">
          <h2>Cart</h2>
          {cart.length===0 && <p>No items</p>}
          <ul>
            {cart.map(i=> (
              <li key={i._id}>
                {i.name} x{i.qty} - ${ (i.price * i.qty).toFixed(2)}
                <button onClick={()=>removeFromCart(i._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="checkout">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button disabled={cart.length===0} onClick={checkout}>Checkout</button>
          </div>
        </aside>
      </main>
    </div>
  )
}

function AppWrapper(){
  return (
    <AuthProvider>
      <Shop />
    </AuthProvider>
  )
}

export default AppWrapper
