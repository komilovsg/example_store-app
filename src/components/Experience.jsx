import React from 'react'
import clothes from '../img/clothes.png'
import video from '../img/video.png'
import { BiCommand } from 'react-icons/bi';

export default function Experience() {
  return (
    <div className='py-20 flex justify-center items-center '>
<div className="p-4 md:w-[80%] w-full ">
  <div className="h-full bg-gray-200 p-8 rounded shadow-lg border-2 relative">
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div><p className="font-bold text-blue-900 text-2xl">
    Our experience to always<br />
    update the lates stayles<br /><br /><br />
    </p></div>
    <div className='flex flex-col md:flex-row pt-10 md:py-0'>
      <img src={clothes} alt="clothes" className='md:w-[150px] w-[150px] border shadow-xl mb-20'/>
      <a href="https://youtube.com/shorts/3ZU3nsdf7RU?feature=share" className='md:w-[200px] w-[200px] absolute border shadow-xl ml-7 -mt-20'><img src={video} alt="clothes"/></a>
    </div>
    <div>
    <BiCommand className='w-40 h-40 mx-5 pb-4 md:pb-0 opacity-20'/>
    </div>
    </div>
    <div className='flex justify-center md:justify-start items-center'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="block w-10 h-10 md:ml-24 text-amber-500"
      viewBox="0 0 975.036 975.036"
    >
      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
    </svg>
    </div>
  </div>
</div>
    </div>
  )
}
