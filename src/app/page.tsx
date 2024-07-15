import { MainHeader } from "@/features/MainHeader";
import { Products } from "@/features/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen">
      <MainHeader />
      <Products />
    </div>
  );
}
