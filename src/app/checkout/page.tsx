import React from "react";
import { LogoLink } from "@/components/LogoLink";
import CheckoutFeature from "@/features/CheckOut";

const Checkout = () => {
  return (
    <div className="w-full min-h-screen md:py-4 md:px-8 py-2 px-4 bg-gray-100 flex flex-col gap-y-4">
      <div>
        <LogoLink style="inline-block !text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-violet-400 to-rose-200 !m-0" />
      </div>
      <CheckoutFeature />
    </div>
  );
};

export default Checkout;
