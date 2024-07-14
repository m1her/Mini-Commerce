import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      <div className="z-50 text-3xl text-white font-anton font-extrabold">
        STRINGLET
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button className="text-sm font-semibold px-5 py-1.5 rounded-full text-white border-2 border-white">
          Login
        </button>
        <div className="w-4 h-4 bg-white"></div>
      </div>
    </div>
  );
};
