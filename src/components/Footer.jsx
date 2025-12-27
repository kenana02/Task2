export default function Footer(){

return(
<footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 mt-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
      <h2 className="text-2xl font-bold mb-2">Prokoders Courses</h2>
      <p className="text-sm text-gray-300">
        Best Place To Learn FrontEnd Developer!
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-8">Quick links</h3>
      <ul className="space-y-1 text-gray-300">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/courses" className="hover:text-white">Coueses</a></li>
        <li><a href="/cart" className="hover:text-white">Cart</a></li>
        <li><a href="/login" className="hover:text-white">Login </a></li>
      </ul>
    </div>

  
    <div>
      <h3 className="text-xl font-semibold mb-2">Contact Us </h3>
      <p className="text-gray-300 text-sm"> E-mail: support@prokoders.com</p>
   
    </div>
  </div>


  <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
    &copy; {new Date().getFullYear()} Prokoders. جميع الحقوق محفوظة.
  </div>
</footer>
)
}