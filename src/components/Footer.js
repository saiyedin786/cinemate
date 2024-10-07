import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
   

      

<footer className="bg-white shadow  dark:bg-gray-900 mx-auto max-w-screen-2xl dark:bg-black">
  <div className="w-full  p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2030{" "}
      <Link href="https://flowbite.com/" className="hover:underline">
        Cinemate
      </Link>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <Link href="#" className="hover:underline me-4 md:me-6">
          Instagram
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:underline me-4 md:me-6">
          Twitter
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:underline me-4 md:me-6">
          Youtube
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:underline">
          Facebook
        </Link>
      </li>
    </ul>
  </div>
</footer>




  )
}
