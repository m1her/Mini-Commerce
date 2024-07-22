"use client";
import { auth } from "@/Firebase/firebaseConfig";
import { RootState } from "@/Redux/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { PromoCode } from "../../../components/PromoCode";

export const CartOrederSummary = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const Vat = useSelector((state: RootState) => state.cart.vat);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const TotalPrice = useSelector((state: RootState) => state.cart.totalAmount);
  const TotalNumberOfItems = useSelector(
    (state: RootState) => state.cart.totalNumberOfItems
  );
  return (
    <div className="flex flex-col w-full col-span-3 bg-gray-400/20 p-6">
      <div className="flex justify-between w-full text-lg font-semibold">
        <div>Order Summary</div>
      </div>
      <hr className="my-6 h-[1px] border-t-0 bg-neutral-400" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center justify-between text-neutral-700 font-semibold">
          <div>Items({TotalNumberOfItems})</div>
          <div>{Math.round(TotalPrice * 100) / 100}$</div>
        </div>
        <div className="flex items-center justify-between text-neutral-700 font-semibold">
          <div className="text-sm">VAT</div>
          <div>{Vat}$</div>
        </div>
        <PromoCode />
        <hr className="mt-4 mb-2 h-[1px] border-t-0 bg-neutral-400" />
        <div className="flex items-center justify-between text-neutral-700 font-semibold">
          <div>Total Cost</div>
          <div>{Math.round((TotalPrice + Vat) * discount * 100) / 100}$</div>
        </div>
        {user ? (
          <button
            className="text-white font-semibold disabled:bg-gray-500 text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            disabled={TotalPrice <= 0}
            onClick={() => router.push("/checkout")}
          >
            CHECHOUT
          </button>
        ) : (
          <button
            className="text-white font-semibold text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};
