"use client";
import { API } from "@/API";
import { setCookie } from "@/hooks/cookies";
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
const keepUserId = useCartStore((state)=>state.keepUserId)
const userId = useCartStore((state)=>state.userId)
console.log(userId, "keepUserId")
  const [formData, setFormData]=useState({
    email: "",
    password: ""
  })
  // console.log(formData)
  const handleredirect = async (e) => {
    e.preventDefault();
    try {
      const res = await API.Login(formData);
       console.log(res.data);
       console.log(res.data.data.token);
       if(res.data){
        toast.success(`${res.data.Message}`)
        setCookie('jwt',res.data.data.token)
        keepUserId(res.data.data)
        router.replace(`/product-page`);
       }
       if(res.data.error){
        toast.error(`${res.data.error}`)
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleredirect} className="space-y-6">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>setFormData(prev=> ({...prev, email: e.target.value}))}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
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
                  autocomplete="current-password"
                  required
                  className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
            
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <div className="bg-indigo-600 rounded-3xl p-2 text-white w-32 text-center mt-4">
              <Link href="/sign-up">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
