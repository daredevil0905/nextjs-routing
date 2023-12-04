"use client"

import { useSearchParams } from "next/navigation"
import React from 'react'

const Search = () => {
  const searchParams = useSearchParams()
  return (
    <main>Search: {searchParams.get('query')}</main>
  )
}

export default Search