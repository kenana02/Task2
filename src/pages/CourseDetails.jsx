
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses.js'
import { useCart } from '../context/CartContext.jsx'

export default function CourseDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const course = courses.find((c) => c.id === id)

  if (!course) {
    return (
      <div className="bg-white p-6 mt-24 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">الكورس غير موجود</h2>
        <p className="mb-4 text-gray-700">تأكد من الرقم المعرّف (ID) للكورس.</p>
        <Link to="/courses" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">العودة إلى الكورسات</Link>
      </div>
    )
  }

  const onAdd = () => {
    const res = addToCart(course)
    if (!res.ok) alert('يجب تسجيل الدخول لإضافة إلى السلة.')
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <h2 className="text-2xl font-bold">{course.title}</h2>
      <p className="text-gray-700">{course.fullDescription}</p>
      <div className="text-gray-700 space-y-1 mt-24">
        <p><span className="font-medium">عدد الدروس:</span> {course.lessonsCount}</p>
        <p><span className="font-medium">المستوى:</span> {course.level}</p>
        <p><span className="font-medium">السعر:</span> ${course.price}</p>
        <p><span className="font-medium">المدّة:</span> {course.duration} أسابيع</p>
        <p><span className="font-medium">الأيام:</span> {course.days.join(', ')}</p>
        <p><span className="font-medium">الوقت:</span> {course.time}</p>
        <p><span className="font-medium">المدرّس:</span> {course.instructor}</p>
        <p><span className="font-medium">اللغة:</span> {course.language}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={onAdd} className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add to Cart</button>
        <Link to="/courses" className="px-3 py-1 border rounded hover:bg-gray-50">رجوع</Link>
      </div>
    </div>
  )
}