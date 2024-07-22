"use client";
import { auth } from "@/Firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import React from "react";
import { CartBtn } from "../CartBtn";

export const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full md:py-4 md:px-8 py-2 px-4 flex justify-between items-center">
      <div className="md:text-3xl text-xl text-white font-anton font-extrabold">
        STRINGLET
      </div>
      <div className="flex items-center justify-center md:gap-x-4 gap-x-3">
        {user ? (
          <div className="flex items-center md:gap-x-4 gap-x-2">
            <div
              className="select-none cursor-pointer md:text-sm text-xs font-semibold md:px-5 px-3 md:py-1.5 py-1 rounded-full text-white border-2 border-white hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout
            </div>
            <div className="text-sm text-white truncate md:w-full w-20">{user.email}</div>
          </div>
        ) : (
          <Link
            href="/login"
            className="md:text-sm text-xs font-semibold md:px-5 px-3 md:py-1.5 py-1 rounded-full text-white border-2 border-white hover:bg-white/20 transition-all duration-300"
          >
            Login
          </Link>
        )}
        <CartBtn />
      </div>
    </div>
  );
};
