import { CartCounter } from "@/app/components/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopoping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compra</span>
      <CartCounter value={2} />
    </div>
  );
}
