"use client";
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { API } from "@/API";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/hooks/cookies";

const Header = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const keepUserId = useCartStore((state) => state.keepUserId);
  const userId = useCartStore((state) => state.userId);
  console.log(userId)
  const logout = async () => {
    try {
      const res =await  API.logout();
      console.log(res.status)
      if(res.status === 201){
        keepUserId("");
        deleteCookie('jwt')
        toast.success(`Logout Sussesfully`);
        router.push("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between items-center px-5">
        <div>
          <h1 className="text-2xl text-indigo-600 font-bold">
            E-commerece App
          </h1>
        </div>
        <div className="ml-auto pr-2 text-sm text-indigo-900">
          {userId?.email}
        </div>
        <div className="relative">
          <Link href="/product-page/cart">
            <FaCartShopping className="text-indigo-600 text-lg" />
            <div className="absolute right-1 -top-5 text-md text-indigo-900">
              {cart.length}
            </div>
          </Link>
        </div>
        <div className="pl-4 cursor-pointer" title="Logout" onClick={logout}>
          <MdOutlineLogout className="text-lg text-indigo-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
