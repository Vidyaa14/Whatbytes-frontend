"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm py-6 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} WhatBytes. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-blue-600 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-sky-500 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-pink-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
