import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div className="pb-12 pt-14 px-8 bg-cover bg-center bg-[url('/mainbnr.jpg')] relative">
      <div className="w-full h-full absolute top-0 left-0 bg-black/10 z-10"></div>
      <div className="w-full h-4 absolute -top-2 left-0 bg-gradient-to-b from-[#fff5f6] from-60% to-transparent z-20"></div>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-2 text-black text-xs">
          <FontAwesomeIcon icon={faCopyright} className="w-3" />
          <div>2024 STRINGLET</div>
        </div>
        <div className="flex items-start text-sm text-black">
          Built by{" "}
          <span className="font-semibold text-gray-500 ml-1">Maher.</span>
        </div>
      </div>
    </div>
  );
};
