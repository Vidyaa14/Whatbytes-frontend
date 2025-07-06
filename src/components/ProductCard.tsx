import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition flex flex-col">
      {/* Link wrapper for image and title */}
      <Link href={`/product/${id}`} className="block p-4">
        <Image
  src={image}
  alt={title}
  width={300}
  height={300}
  className="w-full h-auto object-cover rounded"
/>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-indigo-600 font-bold">₹{price}</p>
      </Link>

      {/* Button (not navigating) */}
      <button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 flex items-center justify-center gap-2 text-sm rounded-b-lg">
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
}
