"use clinet";
import { RootState } from "@/Redux/store";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export const CartBtn = () => {
  const totalItemsNumber = useSelector(
    (state: RootState) => state.cart.totalNumberOfItems
  );
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="md:w-5 w-4 text-white"
      />
      {totalItemsNumber > 0 ? (
        <div className="text-[9px] aspect-square text-white bg-[#fc621a] w-3.5 h-3.5 flex justify-center items-center rounded-full absolute -top-1 -right-1">
          {totalItemsNumber}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
