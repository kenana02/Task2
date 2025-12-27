
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const { cart } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow rounded-b z-50 font-serif">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-indigo-600">Prokoders Courses</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
          <NavLink to="/courses" className="hover:text-indigo-600">Courses</NavLink>
          <NavLink to="/cart" className="hover:text-indigo-600">
            Cart <span className="ml-1 text-sm text-gray-500">({cart.length})</span>
          </NavLink>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Logout</button>
          ) : (
            <NavLink to="/login" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}