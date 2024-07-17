"use server";
import { redirect } from "next/navigation";

export default async function HardRedirect(uri: string) {
  redirect(uri);
}