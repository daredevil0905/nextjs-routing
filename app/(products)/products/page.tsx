import Link from "next/link"
import React from 'react'

const Products = () => {
  const products = [
    {
      name: "Macbook"
    },
    {
      name: "PS5"
    },
    {
      name: "iPhone"
    }
  ]
  return (
    <div className="flex flex-col gap-5 justify-center text-center text-xl text-black font-500">
      {products.map(({ name }) => (
        <Link key={name} href={`/products/${name}`}>
          {name}
        </Link>
      ))}
    </div>
  )
}

export default Products