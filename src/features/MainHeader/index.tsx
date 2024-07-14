import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import React from "react";

export const MainHeader = () => {
  return (
    <div className="w-full min-h-screen relative">
      <NavBar /> 
      <Image src={"/mainbnr.jpg"} alt={""} fill className="-z-10" />
    </div>
  );
};
