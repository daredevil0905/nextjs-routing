import Link from "next/link"
import React from 'react'

interface ProductParams {
  params: {
    id: string
  }
}

const Product = ({ params }: ProductParams) => {
  return (
    <>
      <div className="flex justify-center text-gray-800 text-3xl font-extrabold">
        {params?.id}
      </div>
      <Link href="/products">
        <div className="flex justify-center mt-10">
          <button className="text-center p-5 rounded-md text-white bg-blue-500 font-bold text-xl max-w-[200px]">
            Go to products
          </button>
        </div>
      </Link>
    </>
  )
}

export default Product