'use client'
import ProductCard from '@/components/ProductCard'
import { productAPi } from '@/constant/dataApi'
import React from 'react'

const Page = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl text-indigo-600 font-bold text-center'>Product Lists</h1>
      <div className='mt-5 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {productAPi.map(item=>{
        return( 

          <ProductCard item={item}/>
          )
        })}
      
      </div>

      
    </div>
  )
}

export default Page
