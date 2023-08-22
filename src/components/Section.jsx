import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { BiSolidCalendar } from 'react-icons/bi';
import { RiAuctionFill } from 'react-icons/ri';
import { MdOutlineLocationCity } from 'react-icons/md';
import shit from "../img/t-shit.png"

export default function Section() {
  return (
    <section className='flex flex-wrap justify-center items-center pt-5 container mx-auto bg-slate-100'>
<div className='container px-5 py-12 mx-auto'>
    <div className='flex flex-wrap justify-center items-center'>
    <div className='md:py-6 ms:py-7'>
    <h1 className='text-4xl'>All Your Style</h1>
    <h1 className='font-bold text-amber-500 text-4xl'>Are Here</h1>
    <p className='text-slate-400 mt-4'>This e commerce website is a platform where you can order or <br /> purchase electronic items. You can also find different items.</p>
    <div className='flex flex-wrap justify-start items-center gap-7 mt-10'>
        <button className='border border-amber-600 bg-amber-500 text-white rounded-md px-4 shadow-xl py-1 text-lg active:scale-95 transition-all'>Explore Now</button>
        <button className='flex justify-center items-center gap-1 active:scale-95 transition-all'>
            <a href="https://youtu.be/YFDKCAksZWw" className='flex justify-center items-center gap-1'>
            <BsFillPlayFill className='w-12 h-12 border-2 border-l-orange-600 border-t-orange-600 border-b-orange-600 rounded-3xl shadow-md '/>
            Watch a Video
            </a>
        </button>
        </div>
</div>
<div className='flex justify-around items-center gap-20'>
    <img
    className='w-[40%] mt-5'
    src={shit} alt="Sweater" />
</div>
<div className=''>
        <button className='flex justify-center items-center gap-5 mb-5'>
            <BiSolidCalendar className='w-12 h-12 rounded-full border p-2 shadow-md bg-white'/>
            <p className='text-left'>
                <h1 className='font-bold text-lg'>1332</h1>
                <h3 className='text-sm text-slate-400'>Year</h3>
            </p>
        </button>
        <button className='flex justify-center items-center gap-5 mb-5'>
            <RiAuctionFill className='w-12 h-12 rounded-full border p-2 shadow-md bg-white'/>
            <p className='text-left'>
                <h1 className='font-bold text-lg'>28</h1>
                <h3 className='text-sm text-slate-400'>Bids so far</h3>
            </p>
        </button>
        <button className='flex justify-center items-center gap-5 mb-5'>
            <MdOutlineLocationCity className='w-12 h-12 rounded-full border p-2 shadow-md bg-white'/>
            <p className='text-left'>
                <h1 className='font-bold text-lg'>United</h1>
                <h3 className='text-sm text-slate-400'>Origin</h3>
            </p>
        </button>
    </div>
    </div>
</div>
    </section>
  )
}
