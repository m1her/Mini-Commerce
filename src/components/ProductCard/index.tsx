import Image from "next/image";
import React from "react";

interface ProductCardTypes {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  bgColor: string;
  styles: string;
}

export const ProductCard = ({
  name,
  price,
  description,
  imgUrl,
  bgColor,
  styles,
}: ProductCardTypes) => {
  return (
    <div
      className={`flex flex-col justify-start items-center relative p-20 ${styles}`}
    >
      <div
        className={`w-[750px] absolute z-10 rounded-full aspect-square blur-xl opacity-40 ${bgColor}`}
      ></div>
      <div className="w-[360px] aspect-square bg-white rounded relative z-20 overflow-hidden">
        <Image src={imgUrl} alt={""} fill sizes="1" />
        <div className="absolute top-2 right-2 text-lg font-semibold px-2 py-1 text-white bg-black/60 rounded-full">
          {price} $
        </div>
      </div>

      <div className="py-2 w-[360px] z-20 text-black">
        <div className="text-xl font-medium text-gray-700">{name}</div>
        <div className="text-sm font-medium text-gray-700">{description}</div>
        <div className="w-full flex justify-center pt-3">
          <button className="text-sm px-3 py-1 rounded-full border border-purple-900 text-purple-900 hover:bg-purple-100 transition-all duration-300">
            Add To Cart
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col p-1 bg-white w-64 z-20 rounded">
      <div className="w-full aspect-square bg-gray-300 rounded"></div>
      <div className="flex justify-between items-center">
        <div>name</div>
        <div>19.99</div>
      </div>
      <div className="">
        Description DescriptionDesc riptionD escription
      </div>
    </div> */}
    </div>
  );
};
