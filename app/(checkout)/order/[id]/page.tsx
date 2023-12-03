import React from 'react'

interface OrderParams {
  params: {
    id: string
  }
}

const Order = ({ params }: OrderParams) => {
  return (
    <main>Order: {params.id}</main>
  )
}

export default Order