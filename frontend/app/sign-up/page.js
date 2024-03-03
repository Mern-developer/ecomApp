'use client'
import { API } from '@/API'
import { getCookie, setCookie } from '@/hooks/cookies'
import useCartStore from '@/store/zusStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Page = () => {
  const router = useRouter();
const keepUserId = useCartStore((state)=>state.keepUserId)
const userId = useCartStore((state)=>state.userId)
console.log(userId, "keepUserId")
  const [formData, setFormData]=useState({
    email: "",
    password: ""
  })
  const handleredirect = async (e) => {
    e.preventDefault();
    try {
      const res = await API.siginUp(formData);
       console.log(res.data);
       if(res.data){
        toast.success(`${res.data.Message}`)
        keepUserId(res.data.data)
        router.replace(`/product-page`);
       }
       if(res.data.error){
        let token = getCookie('jwt')
        console.log(token)
        toast.error(`${res.data.error}`)
        toast.success(`Hello si`)

       }
    } catch (err) {
      console.log(err.message);
      toast.error(`${err.message}`)

    }
  };
  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Registration
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleredirect} className="space-y-6" >
        <div>
          <label
            for="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              onChange={(e)=>setFormData(prev=> ({...prev, email: e.target.value}))}
              name="email"
              type="email"
              required
              className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              onChange={(e)=>setFormData(prev=> ({...prev, password: e.target.value}))}
              name="password"
              type="password"
              required
              className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
        <div className="bg-indigo-600 rounded-3xl p-2 text-white w-32 text-center mt-4">
            <Link href="/">
            Sign in
            </Link>
            </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default Page
