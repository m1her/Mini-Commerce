import { LogoLink } from "@/components/LogoLink";
import { LoginFeat } from "@/features/Auth/Login";
import React from "react";

export default function Login() {
  return (
    <div className="w-full h-full min-h-screen md:py-4 md:px-8 py-2 px-4 flex flex-col justify-center items-center relative bg-gradient-to-br from-cyan-400/90 via-violet-400/90 to-rose-200/90">
      <LogoLink />
      <LoginFeat isModal={false} />
    </div>
  );
}
