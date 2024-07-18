"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const CartTableRowItem = ({
  imgUrl,
  name,
  quantity,
  price,
  totalPrice,
}: {
  imgUrl: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}) => {
  return (
    <tr className="text-base font-medium text-gray-700 flex w-full">
      <td className="pt-8 w-6/12">
        <div className="flex gap-x-2 items-start">
          <div className="w-20 aspect-square rounded bg-gray-300 relative overflow-hidden">
            <Image src={imgUrl} alt={""} fill sizes="75" />
          </div>
          <div className="">{name}</div>
        </div>
      </td>
      <td className="pt-8 w-2/12">
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faMinus} className="w-4" />
          <div>{quantity}</div>
          <FontAwesomeIcon icon={faPlus} className="w-4" />
        </div>
      </td>
      <td className="pt-8 w-2/12">
        <div>{price}</div>
      </td>
      <td className="pt-8 w-2/12">
        <div>{totalPrice}</div>
      </td>
    </tr>
  );
};
