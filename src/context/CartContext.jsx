
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext.jsx'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (course) => {
    if (!isLoggedIn) return { ok: false, reason: 'not-logged-in' }
    setCart((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev
      return [...prev, course]
    })
    return { ok: true }
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id))
  }

  const totalPrice = cart.reduce((sum, c) => sum + Number(c.price || 0), 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}