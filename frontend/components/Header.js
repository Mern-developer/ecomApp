'use client'
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const cart =useCartStore((state)=>state.cart)
  console.log(cart)
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between items-center px-5">
        <div>
        <Link href="/">
        <h1 className="text-2xl text-indigo-600 font-bold">
        E-commerece App
        </h1>
        </Link>  
        </div>
        <div className="relative">
          <Link href="/product-page/cart">
            <FaCartShopping className="text-indigo-600 text-lg" />
            <div className="absolute right-1 -top-5 text-md text-indigo-900">
              {cart.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
