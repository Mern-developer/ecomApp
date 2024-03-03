"use client";
import Table from "@/components/Table";
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-indigo-600 font-bold text-center">
        Cart Summary
      </h1>
      <div className="mt-4 w-full max-w-[1000px] mx-auto ">
        <Table cart={cart} />

        <div className="mt-7 ">
          <p className="text-lg font-bold">
            Total Price: ${" "}
            {cart?.reduce((acc, item) => acc + item.totalPrice, 0)}.00{" "}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link href="/product-page">
            <button
              type="button"
              className=" mt-5 text-white w-24 rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1"
            >
              Back
            </button>
          </Link>

          <Link href="/product-page/checkout">
            <button
              type="button"
              className=" mt-5 text-white w-24 rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
