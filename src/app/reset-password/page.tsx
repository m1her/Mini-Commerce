import { LogoLink } from "@/components/LogoLink";
import { ResetPasswordFeat } from "@/features/Auth/ResetPassword";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="w-full h-full bg-black min-h-screen py-4 px-8 flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/90 via-violet-400/90 to-rose-200/90"></div>
      <LogoLink />
      <ResetPasswordFeat isModal={false} />
    </div>
  );
};

export default ResetPassword;
