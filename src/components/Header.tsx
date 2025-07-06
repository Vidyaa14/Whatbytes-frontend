"use client";

import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">Logo</div>

        {/* Search */}
        <div className="flex-1 mx-6 max-w-xl">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            />
          </div>
        </div>

        {/* Cart */}
        <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <ShoppingCart className="w-4 h-4" />
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
