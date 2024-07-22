"use client";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/utilities/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const Payment = () => {
  const Vat = useSelector((state: RootState) => state.cart.vat);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const TotalPrice = useSelector((state: RootState) => state.cart.totalAmount);
  return (
    <div className="p-4 w-full h-full flex flex-col gap-y-6 col-span-1 bg-white rounded shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]">
      <div className="font-anton font-semibold text-lg">Payment</div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(
            Math.round((TotalPrice + Vat) * discount * 100) / 100
          ),
          currency: "usd",
        }}
      >
        <CheckoutPage
          amount={Math.round((TotalPrice + Vat) * discount * 100) / 100}
        />
      </Elements>
    </div>
  );
};
