import React from 'react'
import shit from '../img/images-shit.png'
import { FaBeer } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div>
        <section className=" body-font py-10">
  <div className="container px-5 pt-14 mx-auto flex flex-wrap flex-col">
    <h1 className='text-center text-3xl font-bold py-5'>Looking for favourite t-shit</h1>
    <div className="flex mx-auto flex-wrap">
      <a className="sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none hover:border-indigo-500 hover:text-indigo-500 tracking-wider rounded-t">
        All
      </a>
      <a className="sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:border-indigo-500 hover:text-indigo-500 tracking-wider">
        Assecories
      </a>
      <a className="sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:border-indigo-500 hover:text-indigo-500 tracking-wider">
        Catagories
      </a>
      <a className="sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:border-indigo-500 hover:text-indigo-500 tracking-wider">
        T-shirt
      </a>
    </div>
    <section className="text-gray-600 body-font px-10">
  <div className="container mx-auto flex flex-col md:flex-row py-14 justify-center items-center gap-28">
    <div className="w-[370px] h-[350px] py-5 md:mb-0 flex justify-center items-center">
      <img
        className="[400px] h-[400px] rounded border shadow-md cursor-pointer"
        alt="video"
        src={shit}
        href='https://youtu.be/sZXzakN1GZE'
        typeof='video'
      />
      <img
        className="[200px] h-[200px] absolute ml-72 rounded border-4 border-white shadow-md shadow-black cursor-pointer"
        alt="video"
        src={shit}
        href='https://youtu.be/sZXzakN1GZE'
        typeof='video'
      />
    </div>
    <div className="flex flex-col md:justify-start md:items-start items-center text-center">
      <div className="title-font flex flex-col md:flex-wrap justify-start md:items-start gap-1 text-6xl mb-4 font-bold text-blue-900">
        <div><h1>
            Why
        </h1></div>
        <div className='flex flex-wrap justify-center items-center gap-2'><h1>
         Choose 
        </h1>
         <h1>
         Us
         </h1></div>
      </div>
      <p className="mb-8 leading-relaxed md:text-start text-center">
        Get lost on the beautiful beaches of United, or get <br />
        caught up in the wildness of the night life. It`s up to you. <br />
        Nihil quaeque moderatius quo ut, eu vix naster fierent <br />
      </p>
      <div className="flex justify-center items-center">
        <button className="inline-flex text-white uppercase bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
          Order Now
        </button>
      </div>
      <div className='flex flex-row justify-center items-center pt-20 cursor-pointer'>
        <div className='font-bold pr-2'>01</div>
        <div className='flex justify-center items-center'>
            <p className='font-extrabold text-black'>--------------</p>   
            <p className='text-slate-400'>--------------</p>   
        </div>
        <div className='font-bold text-amber-500 pl-2'>03</div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>
    </div>
  )
}
