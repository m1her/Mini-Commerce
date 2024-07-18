"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};
