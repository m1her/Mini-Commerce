import Link from "next/link";
import React from "react";

const SuccessPayment = () => {
  return (
    <div className="w-full h-full min-h-screen py-4 px-8 flex flex-col justify-center items-center relative bg-gradient-to-br from-cyan-400/90 via-violet-400/90 to-rose-200/90">
      <div className="w-[450px] bg-white py-16 px-8 flex flex-col relative rounded-md gap-y-8">
        <div className="text-xl font-bold text-center">Payment Succeed!!</div>
        <Link className="font-semibold text-center text-white bg-blue-600 rounded py-2 px-6 hover:bg-blue-700 transition-colors duration-300" href="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
