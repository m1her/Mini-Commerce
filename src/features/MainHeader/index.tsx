import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import React from "react";

export const MainHeader = () => {
  return (
    <div className="w-full min-h-screen relative">
      <NavBar />
      <Image src={"/mainbnr.jpg"} alt={""} fill sizes="" className="-z-10" />
      <div className="w-full h-full absolute top-0 left-0 bg-black/15 -z-10"></div>
      <div className="w-full min-h-96 flex flex-col items-center justify-center">
        <Image
          src={"/goal.svg"}
          alt={""}
          width={1000}
          height={1000}
          priority={true}
          className="-z-10 w-1/2 h-[420px]"
        />
        <div className="-mt-24 text-white md:text-lg text-base font-semibold text-center max-w-screen-md px-8">
          At STRINGLET, we believe that friendship is a treasure. Our handmade
          bracelets are designed to celebrate and strengthen the bonds you share
          with your loved ones. Wear your story, cherish the connection.
        </div>
      </div>
      <div className="w-full h-4 absolute -bottom-2 left-0 bg-gradient-to-b from-transparent to-60% to-[rgb(211,246,252)] z-20"></div>
    </div>
  );
};
