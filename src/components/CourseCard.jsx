import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function CourseCard({ course }) {
  const { addToCart } = useCart()

  const handleAdd = () => {
    const res = addToCart(course)
    if (!res.ok && res.reason === 'not-logged-in') {
      alert('يرجى تسجيل الدخول لإضافة كورسات إلى السلة.')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{course.shortDescription}</p>
      <div className="text-sm text-gray-700 mb-2">
        <span className="font-medium">Level:</span> {course.level} • <span className="font-medium">Price:</span> ${course.price}
      </div>
      <div className="mt-auto flex gap-2">
        <Link to={`/courses/${course.id}`} className="px-3 py-1 border rounded hover:bg-gray-50">View Details</Link>
        <button onClick={handleAdd} className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add to Cart</button>
      </div>
    </div>
  )
}