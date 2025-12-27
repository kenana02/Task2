
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-2">404</h2>
      <p className="text-gray-700 mb-4">الصفحة غير موجودة</p>
      <Link to="/" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">العودة إلى الصفحة الرئيسية</Link>
    </div>
  )
}