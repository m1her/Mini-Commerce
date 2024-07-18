"use client";
import { ProductsContext } from "@/components/DataProvider";
import { ProductCard } from "@/components/ProductCard";
import React, { useContext } from "react";

const productsBgColors = [
  " shadow-[inset_0_0_250px_50px_rgba(34,144,113,1)] top-0",
  " shadow-[inset_0_0_250px_50px_rgba(247,187,191,1)] -top-4 -right-10",
  " shadow-[inset_0_0_250px_50px_rgba(151,251,63,1)] -top-16 -left-20 ",
  " shadow-[inset_0_0_250px_50px_rgba(74,149,184,1)] top-0 right-0",
  " shadow-[inset_0_0_250px_50px_rgba(251,98,10,1)] -top-40",
];

export const Products = () => {
  const data = useContext(ProductsContext);

  return (
    <div className="w-full overflow-hidden min-h-screen py-4 px-8 bg-gradient-to-b from-cyan-400/20 via-violet-400/20 to-rose-200/20">
      <div className="grid grid-cols-2 py-10 gap-y-20">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            imgUrl={item.imgUrl}
            bgColor={productsBgColors[index]}
            styles={index == 4 ? "col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
};
