import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import iphonetwo from '../img/orange-phone.png'
import iphoneone from '../img/whight-phone.png'

export default function SeeMore() {
  return (
    <section className="body-font py-10">
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap justify-center items-center gap-10 -m-4">
      <div className="p-4 lg:w-1/4 w-1/2 hover:-translate-y-6 transition-all cursor-pointer">
        <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg border shadow-md overflow-hidden text-center relative">
        <div className='flex justify-center'><img src={iphoneone} alt="phone" className='w-9 pb-3'/></div>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            Years Expiriance
          </h1>
          <p className="leading-relaxed mb-3">
            Fashion yourself as a <br />
            Payfast aplication user
          </p>
          <a className="text-amber-600 inline-flex items-center cursor-pointer">
            Read More
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <button className='border border-blue-900 px-5 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md shadow-md'>See More</button>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2 pb-24 hover:-translate-y-6 transition-all cursor-pointer">
        <div className="h-full bg-[#fe9d66] px-8 pt-16 pb-24 rounded-lg overflow-hidden border shadow-md text-center relative">
          <div className='flex justify-center'><img src={iphonetwo} 
          alt="phone" className='w-9 pb-3'/></div>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
           Echievment
          </h1>
          <p className="leading-relaxed mb-3 text-white">
            Create a new Fashion for <br />
            you to seeanytime and <br />
            anywhere
          </p>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <button className='border px-5 py-2 bg-white hover:bg-blue-100 text-blue-900 font-semibold rounded-md shadow-md'>See More</button>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2 hover:-translate-y-6 transition-all cursor-pointer">
        <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center border shadow-md relative">
        <div className='flex justify-center'><img src={iphoneone} 
          alt="phone" className='w-9 pb-3'/></div>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            Positif Review
          </h1>
          <p className="leading-relaxed mb-3">
            You can use T-shit in peace <br />
            and all its facilities
          </p>
          <a className="text-orange-500 inline-flex items-center cursor-pointer">
            Learn More
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <button className='border border-blue-900 px-5 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md shadow-md'>See More</button>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center text-center gap-5'>
    <BsThreeDots className='absolute w-8 h-8 rounded-full mb-28 '/>
    
    </div>
  </div>
</section>

  )
}
