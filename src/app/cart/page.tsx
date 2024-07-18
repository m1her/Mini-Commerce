"use client";
import { CartTableRowItem } from "@/components/CartTableRowItem";
import { TextInput } from "@/components/Input";
import { LogoLink } from "@/components/LogoLink";
import React from "react";

const Cart = () => {
  return (
    <div className="py-4 px-8 w-full flex justify-center items-center min-h-screen relative bg-gradient-to-tl from-cyan-400/90 via-violet-400/90 to-rose-200/90">
      <div className="mt-4 -mb-4 w-fit absolute top-4 left-8">
        <LogoLink />
      </div>
      <div className="w-full h-full bg-white/70 grid grid-cols-9 rounded mt-10">
        <div className="flex flex-col w-full col-span-6 p-6">
          <div className="flex justify-between w-full text-lg font-semibold">
            <div>Shopping Cart</div>
            <div>Items</div>
          </div>
          <hr className="mt-6 h-[1px] border-t-0 bg-neutral-400" />
         
            <table className="w-full text-left text-neutral-500 text-sm font-light">
              <thead className="flex w-full">
                <tr className="flex w-full pt-6">
                  <th className="w-6/12">PRODUCT DETAILS</th>
                  <th className="w-2/12">QUANTITY</th>
                  <th className="w-2/12">PRICE</th>
                  <th className="w-2/12">TOTAL</th>
                </tr>
              </thead>
              <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full h-[56vh]">
                <CartTableRowItem />
                <CartTableRowItem />
                <CartTableRowItem />
                <CartTableRowItem />
              </tbody>
            </table>
          </div>
      

        <div className="flex flex-col w-full col-span-3 bg-gray-400/20 p-6">
          <div className="flex justify-between w-full text-lg font-semibold">
            <div>Order Summary</div>
          </div>
          <hr className="my-6 h-[1px] border-t-0 bg-neutral-400" />
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center justify-between text-neutral-700 font-semibold">
              <div>Items(3)</div>
              <div>234$</div>
            </div>
            <div className="flex items-center justify-between text-neutral-700 font-semibold">
              <div>Vat</div>
              <div>20$</div>
            </div>
            <TextInput
              id="promo-code"
              name="promoCode"
              type="text"
              label="Promo Code"
              placeholder="Enter your code"
              labelStyle="mb-3 text-neutral-700 font-semibold"
            />
            <button className="text-white font-semibold text-sm h-10 py-2 px-4 text-center w-fit rounded bg-red-400 hover:bg-red-600 transition-colors duration-300">
              APPLY
            </button>
            <hr className="mt-4 mb-2 h-[1px] border-t-0 bg-neutral-400" />
            <div className="flex items-center justify-between text-neutral-700 font-semibold">
              <div>Total Cost</div>
              <div>254$</div>
            </div>
            <button className="text-white font-semibold text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              CHECHOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
