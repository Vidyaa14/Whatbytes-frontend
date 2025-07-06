"use client";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      {/* product image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
        {title}
      </h3>

      {/* price */}
      <p className="text-indigo-600 font-bold mb-2">₹{price}</p>

      {/* add‑to‑cart */}
      <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
}
