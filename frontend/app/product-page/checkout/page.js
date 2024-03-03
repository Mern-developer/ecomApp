'use client'
import { API } from '@/API';
import Table from '@/components/Table';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
 
  return (
    <div  className="container mx-auto translate-x-2/1 translate-y-24 translate">
      
    <div className='flex flex-col justify-center max-w-[600px] mx-auto  items-center border-2 rounded-lg p-16'>
    <h1 className='text-indigo-800 font-bold text-2xl'>Thank you your Order</h1>
    <Link href="/product-page">
    <p className='text inline-block -indigo-800 font-bold text-xl border-b-2 border-indigo-600'>go to home for Shoping</p>
    </Link>
    </div>
     </div>
  )
}

export default Page
