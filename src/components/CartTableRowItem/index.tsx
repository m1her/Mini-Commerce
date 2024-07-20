import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { RemoveBtn } from "./RemoveBtn";
import { IncreaseOrDecrease } from "./IncreaseOrDecrease";

export const CartTableRowItem = ({
  id,
  imgUrl,
  name,
  quantity,
  price,
  totalPrice,
}: {
  id: string;
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
          <div className="flex flex-col gap-y-1">
            <div className="">{name}</div>
            <RemoveBtn id={id} />
          </div>
        </div>
      </td>
      <td className="pt-8 w-2/12">
        <IncreaseOrDecrease id={id} quantity={quantity} />
      </td>
      <td className="pt-8 w-2/12">
        <div>{price}</div>
      </td>
      <td className="pt-8 w-2/12">
        <div>{Math.round(totalPrice * 100) / 100}</div>
      </td>
    </tr>
  );
};
