"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductCard = ({ des, item}) => {
 
  return (
    <div
      className={` ${
        des ? "max-w-[900px] mx-auto" : "max-w-[400px]"
      } w-full border-2 rounded-md p-5`}
    >
      <h2 className="text-gray-800 text-xl text-center mb-5">{item?.title}</h2>
      <p className="text-sm text-center text-red-800 mb-5">{item?.category}</p>
      <p className="text-md text-center mb-6">Price: $ {item?.price}.00</p>
      {des && (
        <p className=" text-gray-600 pb-2 text-justify">{item?.description}</p>
      )}

      {!des ? (
        <Link href={`/product-page/${item.id}`}>
          <button className="text-white w-full rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1">
            view Detail
          </button>
        </Link>
      ) : ''}
    </div>
  );
};

export default ProductCard;
