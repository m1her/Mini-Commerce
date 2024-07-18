import { Footer } from "@/features/Footer";
import { MainHeader } from "@/features/MainHeader";
import { Products } from "@/features/Products";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen">
      <MainHeader />
      <Products />
      <Footer />
    </div>
  );
}
