"use client";
import { CartTableRowItem } from "@/components/CartTableRowItem";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export const ShoppingCartItems = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="flex flex-col w-full col-span-6 p-6 overflow-x-scroll">
      <div className="flex justify-between w-full text-lg font-semibold">
        <div>Shopping Cart</div>
      </div>
      <hr className="mt-6 h-[1px] border-t-0 bg-neutral-400 min-w-[600px]" />

      <table className="text-left min-w-[600px] text-neutral-500 text-sm font-light  ">
        <thead className="flex w-full overflow-hidden">
          <tr className="flex w-full pt-6">
            <th className="w-6/12">PRODUCT DETAILS</th>
            <th className="w-2/12">QUANTITY</th>
            <th className="w-2/12">PRICE</th>
            <th className="w-2/12">TOTAL</th>
          </tr>
        </thead>
        <tbody className="flex flex-col items-center overflow-y-scroll h-[56vh]">
          {items.map((item, idx) => (
            <CartTableRowItem
              key={idx}
              id={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              totalPrice={item.totalPrice}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
