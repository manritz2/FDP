import React, { useState, useEffect, useContext } from 'react'
import api from '../../api/axios'
import { AuthContext } from '../../utils/auth'
import { Navigate } from 'react-router-dom'

function AdminProducts() {
  const { user, token } = useContext(AuthContext)
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' })
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    if (!user?.isAdmin) return
    api.get('/products')
      .then(r => setProducts(r.data))
      .catch(console.error)
  }, [user])

  if (!user?.isAdmin) return <Navigate to="/" />

  async function handleSubmit(e) {
    e.preventDefault()
    const data = { ...form, price: Number(form.price) }
    try {
      if (editing) {
        await api.put(`/products/${editing}`, data)
      } else {
        await api.post('/products', data)
      }
      setForm({ name: '', description: '', price: '', image: '' })
      setEditing(null)
      const r = await api.get('/products')
      setProducts(r.data)
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.error || 'Error saving product')
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/products/${id}`)
      setProducts(prev => prev.filter(p => p._id !== id))
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.error || 'Error deleting product')
    }
  }

  function startEdit(p) {
    setForm({
      name: p.name,
      description: p.description || '',
      price: p.price.toString(),
      image: p.image || ''
    })
    setEditing(p._id)
  }

  return (
    <div className="container">
      <h1>Manage Products</h1>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <h3>{editing ? 'Edit Product' : 'Add Product'}</h3>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          required
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
          required
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm(p => ({ ...p, image: e.target.value }))}
        />
        <div>
          <button type="submit">{editing ? 'Update' : 'Add'}</button>
          {editing && (
            <button type="button" onClick={() => {
              setForm({ name: '', description: '', price: '', image: '' })
              setEditing(null)
            }}>Cancel</button>
          )}
        </div>
      </form>

      <div className="products-grid">
        {products.map(p => (
          <div key={p._id} className="product-card">
            <img src={p.image || 'https://via.placeholder.com/150'} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>${p.price.toFixed(2)}</p>
            <div className="actions">
              <button onClick={() => startEdit(p)}>Edit</button>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}