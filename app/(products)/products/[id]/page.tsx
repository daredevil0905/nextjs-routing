import React from 'react'

interface ProductParams {
  params: {
    id: string
  }
}

const Product = ({ params }: ProductParams) => {
  return (
    <div className="flex justify-center text-gray-800 text-3xl font-extrabold">
      {params?.id}
    </div>
  )
}

export default Product