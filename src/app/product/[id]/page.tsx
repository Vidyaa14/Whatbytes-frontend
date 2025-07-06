import { notFound } from "next/navigation";
import { Star } from "lucide-react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const products = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    description: "Comfortable and lightweight running shoes perfect for daily jogs and workouts.",
    image: "https://tse2.mm.bing.net/th/id/OIP.82bS2VXpEbgv100hDZEUTQHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 89,
    category: "Electronics",
    description: "Noise-cancelling wireless headphones with long battery life and superior sound quality.",
    image: "https://tse3.mm.bing.net/th/id/OIP.OZFBOseo1dhu-PssNGtuGAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse2.mm.bing.net/th/id/OIP.NNqfN3bdMSZMZ-MMDuBYxwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    description: "High-resolution digital camera for capturing stunning photos and videos.",
    image: "https://th.bing.com/th/id/R.21409b471818fa60cd4b5e4d589a6f07?rik=d%2fx8tuuBulqjIw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fNikon_26314_Coolpix_S9300_Digital_Camera_842361.jpg&ehk=TIM%2bGHhLMkOCM30Lb1FmQIchZ94rHeraumUIGQs8WYg%3d&risl=&pid=ImgRaw&r=0",
  },
];


// ✅ make it async here
export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return notFound();

  // rest of the code below...



  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-12 bg-white rounded shadow">
      {/* Left: Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Right: Product Info */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-xl text-indigo-600 font-semibold">${product.price}</p>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={18} fill="currentColor" stroke="none" />
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700">{product.description}</p>

        {/* Category */}
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Category:</span> {product.category}
        </p>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
