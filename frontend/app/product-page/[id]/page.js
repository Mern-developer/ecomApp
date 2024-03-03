"use client";
import ProductCard from "@/components/ProductCard";
import { productAPi } from "@/constant/dataApi";
import useCartStore from "@/store/zusStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const ParamsId = params.id;
  const addToCart = useCartStore((state) => state.addToCart);
  const [cart] = useCartStore((state) => state.cart);
  const [quantity, setQuantity] = useState();
  const [filterProduct] = productAPi.filter(
    (item) => item.id === Number(ParamsId)
  );
  console.log(filterProduct);
  console.log(cart);
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   if (cart?.id === Number(ParamsId)) {
  //     setCount(cart?.quantity);
  //   }else{
  //     setCount(1);
  //   }
  //   console.log(count);
  // }, [cart?.id, count]);

  // console.log(count)

  const handleIncrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const totalPrice = filterProduct.price * count;
  const { id, title, price, description } = filterProduct;
  const cartItems = {
    quantity: count,
    totalPrice,
    id,
    title,
    price,
    description,
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-indigo-600 font-bold text-center">
        Product Detail Page
      </h1>
      <div className="mt-5 mx-auto">
        <ProductCard
          // getQuantity={getQuantity}
          des={true}
          addtoCart={true}
          item={filterProduct}
        />

        <div className="max-w-[900px] mx-auto">
          <div className="flex gap-2 my-5 max-w-[900px] mx-auto">
            <p
              onClick={handleDecrement}
              className="text-lg min-w-10 text-center bg-slate-600 p-1 cursor-pointer rounded-md text-white "
            >
              -
            </p>
            <p className="text-lg text-Black p-1">{count}</p>
            <p
              onClick={handleIncrement}
              className="text-lg bg-slate-600 min-w-10 text-center p-1 rounded-md text-white cursor-pointer "
            >
              +
            </p>
          </div>
        </div>
        <p className="max-w-[900px] mx-auto">
          {" "}
          Price: $ {filterProduct.price * count}.00
        </p>
        <div className="mt-10 max-w-[900px] mx-auto flex justify-between ">
          <Link href="/product-page/cart">
            <button
              onClick={() => addToCart(cartItems)}
              className="text-white w-[200px]  rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1"
            >
              Add To Cart
            </button>
          </Link>
          <Link href="/product-page">
            <button className="text-white w-[200px]  rounded-3xl cursor-pointer mb-1 bg-indigo-800 hover:bg-indigo-500 p-1">
              back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
