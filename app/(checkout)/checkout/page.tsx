import Link from "next/link"
import React from 'react'

const Checkout = () => {
  return (
    <>
      <main>Checkout</main>
      <div className="flex justify-center">
        <Link href={`/order/${Math.floor(Math.random() * 10000)}`}>
          <button className="text-center p-5 rounded-md text-white bg-blue-500 font-bold text-xl">
            Place order
          </button>
        </Link>
      </div>
    </>
  )
}

export default Checkout