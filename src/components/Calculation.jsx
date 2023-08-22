import React from 'react'

export default function Calculation() {
  return (
    <section className=" body-font">
  <div className="container px-5 py-24 mx-auto flex justify-center">
    <div className="w-[70%] py-5 flex flex-col md:flex-row justify-center items-center -m-4 text-center bg-slate-200 rounded-md shadow-md">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
          36+
        </h2>
        <p className="leading-relaxed text-slate-400">User Trust</p>
      </div>
      <div className=''>|</div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
          24K+
        </h2>
        <p className="leading-relaxed text-slate-400">Brand Vision</p>
      </div>
      <div className=''>|</div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
          8k+
        </h2>
        <p className="leading-relaxed text-slate-400">Achievment</p>
      </div>
    </div>
  </div>
</section>

  )
}
