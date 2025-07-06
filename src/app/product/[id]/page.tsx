
// src/app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import Image from "next/image";

/* dummy data -------------------------------------------------- */
const products = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    description: "Comfortable and lightweight running shoes perfect for daily jogs and workouts.",
    image: "https://tse2.mm.bing.net/th/id/OIP.82bS2VXpEbgv100hDZEUTQHaHa?w=626&h=626&pid=ImgDetMain",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 89,
    category: "Electronics",
    description: "Noise-cancelling wireless headphones with long battery life and superior sound quality.",
    image: "https://tse3.mm.bing.net/th/id/OIP.OZFBOseo1dhu-PssNGtuGAHaHa?pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Home",
    description: "Stylish and durable backpack with multiple compartments for travel or school.",
    image: "https://i.pinimg.com/736x/0d/70/bf/0d70bf782775f6bd3155d617f69d3898.jpg",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking, notifications, and long battery life.",
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SL1500_.jpg",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    description: "UV-protective sunglasses with a sleek frame, perfect for sunny outings.",
    image: "https://tse2.mm.bing.net/th/id/OIP.NNqfN3bdMSZMZ-MMDuBYxwHaE8?pid=ImgDetMain",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    description: "High-resolution digital camera for capturing stunning photos and videos.",
    image: "https://th.bing.com/th/id/R.21409b471818fa60cd4b5e4d589a6f07?pid=ImgRaw",
  },
];

/* page component --------------------------------------------- */
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  /* ✅ MUST await params */
  const { id } = await params;

  const product = products.find((p) => p.id.toString() === id);
  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 py-10 bg-white rounded shadow">
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-md shadow-md object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl text-black font-bold">{product.title}</h1>
        <p className="text-xl font-semibold text-indigo-600">
          ₹{product.price}
        </p>

        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" stroke="none" />
          ))}
        </div>

        <p className="text-sm text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Category:</span> {product.category}
        </p>

        <button className="mt-6 w-full rounded bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
