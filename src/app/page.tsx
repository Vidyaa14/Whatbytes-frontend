import ProductCard from "../components/ProductCard"; // use "@/components/..." if alias is set

const sampleProducts = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image: "https://tse2.mm.bing.net/th/id/OIP.82bS2VXpEbgv100hDZEUTQHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 89,
    image: "https://tse3.mm.bing.net/th/id/OIP.OZFBOseo1dhu-PssNGtuGAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    image: "https://i.pinimg.com/736x/0d/70/bf/0d70bf782775f6bd3155d617f69d3898.jpg",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SL1500_.jpg",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    image: "https://tse2.mm.bing.net/th/id/OIP.NNqfN3bdMSZMZ-MMDuBYxwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    image: "https://th.bing.com/th/id/R.21409b471818fa60cd4b5e4d589a6f07?rik=d%2fx8tuuBulqjIw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fNikon_26314_Coolpix_S9300_Digital_Camera_842361.jpg&ehk=TIM%2bGHhLMkOCM30Lb1FmQIchZ94rHeraumUIGQs8WYg%3d&risl=&pid=ImgRaw&r=0",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
      {/* Sidebar */}
      <aside className="bg-blue-700 text-white p-4 rounded-lg shadow h-fit">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <p className="font-medium mb-2">Category</p>
          <div className="space-y-2 text-sm">
            <label className="block">
              <input type="radio" name="category" defaultChecked className="mr-2" />
              All
            </label>
            <label className="block">
              <input type="radio" name="category" className="mr-2" />
              Electronics
            </label>
            <label className="block">
              <input type="radio" name="category" className="mr-2" />
              Clothing
            </label>
            <label className="block">
              <input type="radio" name="category" className="mr-2" />
              Home
            </label>
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="font-medium mb-2">Price</p>
          <input
            type="range"
            min={0}
            max={1000}
            className="w-full accent-white"
            defaultValue={1000}
          />
        </div>
      </aside>

      {/* Product Listing */}
      <section>
        <h2 className="text-xl font-semibold text-black mb-4">Product Listing</h2>
        <div className="grid gap-4 grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-3">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
