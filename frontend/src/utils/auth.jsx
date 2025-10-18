import React, { createContext, useState, useEffect } from 'react'
import api from '../api/axios'

export const AuthContext = createContext({ user: null, token: null })

export function AuthProvider({ children }){
  const [user, setUser] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('user')||'null') }catch{return null}
  })
  const [token, setToken] = useState(()=>localStorage.getItem('token'))

  useEffect(()=>{ localStorage.setItem('user', JSON.stringify(user)) },[user])
  useEffect(()=>{ if(token) localStorage.setItem('token', token); else localStorage.removeItem('token') },[token])

  async function login(email, password){
    const res = await api.post('/auth/login', { email, password })
    setToken(res.data.token)
    setUser({ ...res.data.user, isAdmin: res.data.user.isAdmin })
  }
  async function register(name, email, password){
    const res = await api.post('/auth/register', { name, email, password })
    setToken(res.data.token)
    setUser({ ...res.data.user, isAdmin: res.data.user.isAdmin })
  }
  function logout(){ setToken(null); setUser(null) }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
