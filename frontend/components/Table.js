'use client'
import useCartStore from '@/store/zusStore'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Table = ({cart}) => {
const router =useRouter();
  const removeFromCart = useCartStore((state)=> state.removeFromCart)
    
const redirect=(id)=>{
  router.push(`/product-page/${id}`)
}

return (
    <div>
    <table className="table-fixed w-full px-10">
    <thead>
      <tr className="border-b-indigo-800 py-2 border-2 mb-10">
        <th className="text-start">No</th>
        <th className="text-start">Title</th>
        <th className="text-start">Price</th>
        <th className="text-start md:block hidden">Descripton</th>
        <th className="text-start">quantity</th>
        <th className="text-start">Action</th>
      </tr>
    </thead>
    <tbody>
    
    {cart?.map((item, i)=>{
      return(
        <tr key={i} className="mt-16">
        <td  className="">
      
          {i+1}
        </td>
        <td>{item?.title}</td>
        <td>$ {item?.totalPrice}.00</td>
        <td className=" md:block hidden">{item?.description?.length >120 ? item?.description?.slice(0, 120) +"..." : item?.description}</td>
        <td className='text-center'>
         {item?.quantity}
        </td>
        <td className='text-center cursor-pointer' >
         <div className='flex gap-5'>
         <div className="text-green-900" onClick={()=>redirect(item?.id)}>Edit</div>
         <div className="text-red-900" onClick={()=>removeFromCart(item?.id)}>delete</div>
         </div>
        </td>
        </tr>
       )
      })}
    </tbody>
  </table>
    </div>
  )
}

export default Table
