
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (email && password) {
      login()
      navigate('/')
    } else {
      alert('الرجاء إدخال البريد وكلمة المرور')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-blue-700 bg-opacity-10 mt-24 p-6 rounded-xl shadow font-serif">
      <h2 className="text-xl font-semibold  text-center  text-blue-900 mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white rounded py-2 hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  )
}

