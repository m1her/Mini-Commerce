import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      <div className="md:text-3xl text-xl text-white font-anton font-extrabold">
        STRINGLET
      </div>
      <div className="flex items-center justify-center md:gap-x-4 gap-x-3">
        <Link
          href="/login"
          className="md:text-sm text-xs font-semibold md:px-5 px-3 md:py-1.5 py-1 rounded-full text-white border-2 border-white hover:bg-white/20 transition-all duration-300"
        >
          Login
        </Link>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="md:w-5 w-4 text-white"
        />
      </div>
    </div>
  );
};
