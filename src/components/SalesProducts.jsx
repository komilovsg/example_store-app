import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import tshitone from '../img/images-shit.png'
import tshittwo from '../img/images-shit01.png'
import tshittree from '../img/images-shit02.png'
import tshitfore from '../img/images-shit03.png'

export default function SalesProducts() {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container flex justify-center items-center px-5 pt-20 pb-5 mx-auto">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow sm:pr-16 text-4xl font-medium title-font text-gray-900">
        Our best saler product
      </h1>
      <button className="flex-shrink-0 flex justify-center items-center gap-1 text-white bg-amber-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg mt-10 sm:mt-0">
        See all product
        <AiOutlineArrowRight className='w-5'/>
      </button>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-20 mx-auto pt-5">
    <div className="flex flex-wrap">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
        <a className="block relative h-48 rounded overflow-hidden group-hover:-translate-y-2 transition-all">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block cursor-pointer"
            src={tshitone}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
          <div><h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold">16</h1><h5 className='font-bold text-amber-500'>$</h5>
          </div>
          <span className='ml-10'><strike>100$</strike></span>
          </div>
          <button className='border border-amber-500 bg-amber-400 hover:bg-orange-400 rounded-md shadow-md px-5 py-1 text-white'>BUY</button>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
        <a className="block relative h-48 rounded overflow-hidden group-hover:-translate-y-2 transition-all">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshittwo}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
        <div><h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold">26</h1><h5 className='font-bold text-amber-500'>$</h5>
          </div>
          <span className='ml-10'><strike>100$</strike></span>
          </div>
          <button className='border border-black bg-black hover:bg-slate-700 rounded-md shadow-md px-5 py-1 text-white'>BUY</button>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
        <a className="block relative h-48 rounded overflow-hidden group-hover:-translate-y-2 transition-all">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshittree}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
        <div><h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold">36</h1><h5 className='font-bold text-amber-500'>$</h5>
          </div>
          <span className='ml-10'><strike>100$</strike></span>
          </div>
          <button className='border border-black bg-black hover:bg-slate-700 rounded-md shadow-md px-5 py-1 text-white'>BUY</button>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
        <a className="block relative h-48 rounded overflow-hidden group-hover:-translate-y-2 transition-all">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={tshitfore}
          />
        </a>
        <div className="mt-4 flex flex-wrap justify-between items-start">
        <div><h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <div className='flex justify-start items-end gap-1'>
          <h1 className="mt-1 text-lg font-bold">24</h1><h5 className='font-bold text-amber-500'>$</h5>
          </div>
          <span className='ml-10'><strike>95$</strike></span>
          </div>
          <button className='border border-black bg-black hover:bg-slate-700 rounded-md shadow-md px-5 py-1 text-white'>BUY</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
