import Link from "next/link"
import React from 'react'

const Cart = () => {
  return (
    <>
      <main>
        Cart
      </main>
      <div className="flex justify-center">
        <Link href="/checkout">
          <button className="text-center p-5 text-white font-bold text-xl bg-black rounded-md">
            Checkout
          </button>
        </Link>
      </div>
    </>
  )
}

export default Cart