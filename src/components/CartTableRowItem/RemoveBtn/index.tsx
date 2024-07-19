import { REMOVE_ITEM } from "@/Redux/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

export const RemoveBtn = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(REMOVE_ITEM({ id, isDelete: true }));
  };
  return (
    <div
      className="text-xs w-fit text-gray-500 hover:text-red-400 cursor-pointer transition-colors duration-300"
      onClick={deleteHandler}
    >
      Remove
    </div>
  );
};
