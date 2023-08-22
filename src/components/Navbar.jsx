import React from 'react'
import { BiCommand } from 'react-icons/bi';

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font border-2 rounded-md shadow-md pt-5 ml-5 mr-5 bg-slate-100">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
    <a href='#' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <BiCommand className='w-7 h-7 mx-3'/>
      <span className="text-xl font-bold">Pra<a className='text-amber-700'>oud</a></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a href="#" className="border-b border-b-transparent transition duration-50 ease-in-out hover:border-blue-500">
  <a className="mr-5 hover:text-gray-900">Home</a>
</a>
<a href="#" className="border-b border-transparent transition duration-50 ease-in-out hover:border-blue-500">
  <a className="mr-5 hover:text-gray-900">Shop</a>
</a>
<a href="#" className="border-b border-transparent transition duration-50 ease-in-out hover:border-blue-500">
  <a className="mr-5 hover:text-gray-900">Features</a>
</a>
<a href="#" className="border-b border-transparent transition duration-50 ease-in-out hover:border-blue-500">
  <a className="mr-5 hover:text-gray-900">Pricing</a>
</a>
    </nav>
    <button className="inline-flex items-center bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 active:scale-95 transition-all">
      Contact Us
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>
  )
}
