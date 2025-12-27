import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart()

  return (
    <div className='text-center'>
      <h2 className="text-2xl font-semibold m-20 "> Your Courses</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">This is Empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((c) => (
            <div key={c.id} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-gray-600">${c.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(c.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold"> Courses Number : {cart.length}</p>
            <p className="font-semibold"> Total: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  )
}