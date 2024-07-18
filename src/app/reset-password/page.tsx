import { LogoLink } from "@/components/LogoLink";
import { ResetPasswordFeat } from "@/features/Auth/ResetPassword";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="w-full h-full bg-black min-h-screen py-4 px-8 flex flex-col justify-center items-center relative bg-gradient-to-br from-cyan-400/90 via-violet-400/90 to-rose-200/90">
  
      <LogoLink />
      <ResetPasswordFeat isModal={false} />
    </div>
  );
};

export default ResetPassword;
