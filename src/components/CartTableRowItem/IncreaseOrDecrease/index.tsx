import { ADD_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "@/Redux/cartSlice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";

export const IncreaseOrDecrease = ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) => {
  const dispatch = useDispatch();

  const minusHandler = () => {
    dispatch(REMOVE_ITEM({ id, isDelete: false }));
  };
  const plusHandler = () => {
    dispatch(INCREASE_ITEM(id));
  };
  return (
    <div className="flex items-center gap-x-2">
      <FontAwesomeIcon icon={faMinus} className="w-4 text-red-400 hover:text-red-500 transition-colors duration-300 cursor-pointer" onClick={minusHandler} />
      <div>{quantity}</div>
      <FontAwesomeIcon icon={faPlus} className="w-4 text-green-400 hover:text-green-500 transition-colors duration-300 cursor-pointer" onClick={plusHandler} />
    </div>
  );
};
