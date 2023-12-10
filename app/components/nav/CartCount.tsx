"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { CiShoppingCart } from "react-icons/ci";
const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div>
        <CiShoppingCart size={30} />
      </div>
      <span className="absolute top-[-10px] right-[-10px] bg-slate-700 h-6 w-6 flex items-center text-white  rounded-full justify-center text-sm">
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
