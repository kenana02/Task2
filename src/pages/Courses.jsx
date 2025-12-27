
import { useEffect, useMemo, useState } from 'react'
import { courses as data } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'
import Pagination from '../components/Pagination.jsx'

const PER_PAGE = 6

export default function Courses() {
  const [page, setPage] = useState(2)
  const totalPages = Math.ceil(data.length / PER_PAGE)

  useEffect(() => {
    if (page > totalPages) setPage(1)
  }, [totalPages, page])

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return data.slice(start, start + PER_PAGE)
  }, [page])

  return (
    <div>
      <h2 className="text-2xl font-serif mt-12 text-center ">Availabel courses </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {paginated.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}