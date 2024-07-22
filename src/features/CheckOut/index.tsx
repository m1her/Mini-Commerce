import React from "react";
import { DeliveryDetails } from "./DeliveryDetails";
import { Payment } from "./Payment";

const CheckoutFeature = () => {
  return (
    <div className="w-full h-full lg:grid flex flex-col gap-y-4 grid-cols-3 gap-x-4">
      <DeliveryDetails />
      <Payment />
    </div>
  );
};

export default CheckoutFeature;
