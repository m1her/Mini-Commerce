import { CartOrederSummary } from "@/features/Cart/CartOrederSummary";
import React from "react";
import { ShoppingCartItems } from "./ShoppingCartItems";

const CartFeature = () => {
  return (
    <div className="w-full h-full bg-white/70 lg:grid flex flex-col grid-cols-9 rounded mt-10">
      <ShoppingCartItems />
      <CartOrederSummary />
    </div>
  );
};

export default CartFeature;
