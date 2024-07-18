import { ADD_ITEM, ItemType } from "@/Redux/cartSlice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const AddToCartBtn = ({
  id,
  name,
  price,
  imgUrl,
}: {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>();
  const [amount, setAmount] = useState<number>(1);

  const subHandler = () => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount((prev) => prev - 1);
    }
  };

  const addHandler = () => {
    if (amount >= 99) {
      setAmount(99);
    } else {
      setAmount((prev) => prev + 1);
    }
  };

  const openHandler = () => {
    setIsOpen((prev) => !prev);
    setAmount(1);
  };

  const confirmHandler = () => {
    dispatch(
      ADD_ITEM({
        id,
        name,
        price,
        quantity: amount,
        totalPrice: amount * price,
        imgUrl,
      })
    );
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen ? (
        <div className="flex items-center gap-x-4">
          <button
            className="w-20 text-sm px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
            onClick={openHandler}
          >
            Cancel
          </button>
          <FontAwesomeIcon
            onClick={subHandler}
            icon={faMinus}
            className="w-4 text-red-500 hover:text-red-600 bg-red-100 p-1 rounded hover:bg-red-200 transition-colors duration-300 cursor-pointer"
          />
          <input
            className="
          px-2 py-1 w-12 text-sm border rounded focus:ring focus:ring-blue-200 focus:border-blue-200 !outline-none placeholder:text-sm placeholder:font-normal border-[#cbcfd6];
          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            id="add-to-cart"
            value={amount}
            type="number"
            min={1}
            readOnly
          />
          <FontAwesomeIcon
            onClick={addHandler}
            icon={faPlus}
            className="w-4 text-green-500 hover:text-green-600 bg-green-100 p-1 rounded hover:bg-green-200 transition-colors duration-300 cursor-pointer"
          />
          <button
            className="w-20 text-sm px-3 py-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
            onClick={confirmHandler}
          >
            Confirm
          </button>
        </div>
      ) : (
        <button
          className="text-sm px-3 py-1 rounded-full border border-purple-900 text-purple-900 hover:bg-purple-100 transition-all duration-300"
          onClick={openHandler}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};
