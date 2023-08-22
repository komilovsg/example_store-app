import React from 'react'
import SalesProducts from '../components/SalesProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import SeeMore from '../components/SeeMore'
import Calculation from '../components/Calculation'
import Look from '../components/Look'
import Question from '../components/Question'

export default function Products() {
  return (
    <div className=' bg-slate-100'>
        <SalesProducts/>
        <WhyChooseUs/>
        <SeeMore/>
        <Calculation/>
        <Look/>
        <Question/>
    </div>
  )
}
