import React from 'react'
import { BiCommand } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="bg-[#121328] text-white body-font">
  <div className="container px-10 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <a href='#' className="flex title-font font-medium justify-center md:justify-start items-center text-gray-900 mb-4 md:mb-0">
      <BiCommand className='w-7 h-7 text-white'/>
      <span className="text-xl font-bold text-white pl-2">Pra<a className='text-amber-700'>oud</a></span>
    </a>
      <p className="mt-2 text-sm text-gray-500">
        Looking for an e commerce website? We <br />
        offer a turn key ecommerce website with <br />
        the latest technology. Get your online store
        today!
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 pt-5 justify-center sm:justify-start">
        <a href='#' className="bg-amber-500 rounded-full w-7 h-7 flex justify-center items-center active:scale-95 transition-all">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href='#' className="ml-3 bg-amber-500 rounded-full w-7 h-7 flex justify-center items-center active:scale-95 transition-all">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href='#' className="ml-3 bg-amber-500 rounded-full w-7 h-7 flex justify-center items-center active:scale-95 transition-all">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </span>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
          Home
        </h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discover</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Explore</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Join</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
          Company
        </h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Corporation</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fashions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
          Features
        </h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cart</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Notification</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sale</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
          Contact Us
        </h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy & Poloci</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">+009-852-693</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-amber-500">
    <div className="container mx-auto py-3 px-5">
    </div>
  </div>
</footer>

  )
}
