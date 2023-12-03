"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [searchInput, setSearchInput] = useState("")

  return (
    <>
      <main>
        Home
      </main>    
      <Link href="/products" className="flex justify-center">
        Products
      </Link>
      <div className="flex flex-col justify-center max-w-[300px] mx-auto">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search here..."
          className="my-10 p-5 rounded-md border-2 border-blue-400"
        />
        <Link href={`/search?q=${searchInput}`} className="mx-auto text-center p-5 rounded-md text-white bg-blue-500 font-bold text-xl max-w-[200px]">
          <button>Search</button>
        </Link>
      </div>
    </>
  )
}
