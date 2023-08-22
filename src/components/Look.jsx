import React from 'react'
import tshitone from '../img/look-one.png'
import tshittwo from '../img/look-two.png'
import tshittree from '../img/look-tree.png'



export default function Look() {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container flex justify-center items-center px-5 pt-20 pb-5 mx-auto">
    <div className="w-[95%] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
      <h1 className="flex-grow text-center md:text-start md:text-3xl text-2xl font-medium title-font text-gray-900">
        Tranding Ourfit Of <br /> The Day.
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center text-xs gap-3'>
        <h1>The e-commerce site has an eye catching <br />
        design and is perfect for people who want to <br />
        buy different items, but don`t have time for <br />
        shopping.
        </h1>
      <button className="flex-shrink-0 flex justify-center items-center gap-1 text-white bg-amber-500 border-0 py-1 px-6 focus:outline-none hover:bg-orange-500 rounded md:text-lg text-sm mt-10 sm:mt-0">
        Explore
      </button>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-2 mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center -m-4">
      <div className="lg:w-1/4 md:w-1/2 w-2/3 p-4 hover:scale-105 transition-all cursor-pointer">
        <a className="block relative h-[300px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshitone}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
          <div >
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            New Lookbook Summer
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            Collection 2021
          </h2>
          </div>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold text-amber-500">$173</h1>
          </div>
         </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-2/3 p-4 hover:scale-105 transition-all cursor-pointer">
        <a className="block relative h-[300px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshittwo}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
          <div >
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            New Lookbook
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            Collection 2021
          </h2>
          </div>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold text-amber-500">$210</h1>
          </div>
         </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-2/3 p-4 hover:scale-105 transition-all cursor-pointer">
        <a className="block relative h-[300px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshittree}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
          <div >
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            New Lookbook Winter
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            Collection 2021
          </h2>
          </div>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold text-amber-500">$344</h1>
          </div>
         </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
