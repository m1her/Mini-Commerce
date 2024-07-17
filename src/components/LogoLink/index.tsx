"use client";
import React from "react";
import HardRedirect from "../HardRedirect";

export const LogoLink = () => {
  return (
    <div
      className="md:text-3xl text-xl z-50 select-none -mt-4 mb-4 text-white font-anton font-extrabold cursor-pointer"
      onClick={() => HardRedirect("/")}
    >
      STRINGLET
    </div>
  );
};
