"use client";
import { API } from "@/API";
import Table from "@/components/Table";
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const keepUserId = useCartStore((state) => state.keepUserId);
  const userId = useCartStore((state) => state.userId);
  console.log(userId, "keepUserId");
  const cart = useCartStore((state) => state.cart);
  let [carts] = cart;
  console.log(carts);
  const fetchData = async () => {
    try {
      if (cart.length > 0) {
        const res = await API.orderItem({ cartOrder: cart });
        // keepUserId(res.data);
        // console.log(res);
        router.push("/product-page");
        toast.success(`${res.data.message}`);
      }else{
        toast.error(`Cart is empty`);
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  };

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

          <button
            onClick={fetchData}
            type="button"
            className=" mt-5 text-white w-24 rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
