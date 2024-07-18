import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CartBtn = () => {
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="md:w-5 w-4 text-white"
      />
      <div className="text-[9px] aspect-square text-white bg-[#fc621a] w-3.5 h-3.5 flex justify-center items-center rounded-full absolute -top-1 -right-1">
        1
      </div>
    </div>
  );
};
