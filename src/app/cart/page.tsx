import { LogoLink } from "@/components/LogoLink";
import CartFeature from "@/features/Cart";
import React from "react";

const Cart = () => {
  return (
    <div className="md:py-4 md:px-8 py-2 px-4 w-full flex justify-center items-center min-h-screen relative bg-gradient-to-tl from-cyan-400/90 via-violet-400/90 to-rose-200/90">
      <div className="mt-4 -mb-4 w-fit absolute top-4 left-8">
        <LogoLink />
      </div>
      <CartFeature />
    </div>
  );
};

export default Cart;
