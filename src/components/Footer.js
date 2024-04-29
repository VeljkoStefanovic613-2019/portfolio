import React from 'react'
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    

<footer className="bg-slate-100 rounded-lg shadow dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://flowbite.com/" className="hover:underline">Portfolio Veljko Stefanović</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}
