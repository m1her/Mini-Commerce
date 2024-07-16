import { LoginFeat } from "@/features/Auth/Login";
import React from "react";

export default function Login() {
  return (
    <div className="w-full h-full bg-black min-h-screen py-4 px-8 flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/90 via-violet-400/90 to-rose-200/90"></div>
      <LoginFeat />
    </div>
  );
}
