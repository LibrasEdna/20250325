"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";

export default function XtraLabHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FF9933] text-white py-4 px-4 shadow-[0px_10px_10px_rgba(128,128,128,0.5)]  font-[Geneva, Verdana, Tahoma, system-ui, sans-serif] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold ">
            XtraLab.
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="font-bold hover:text-black">
            About US
          </Link>
          <Link href="/tutor" className="font-bold hover:text-black">
            Tutor
          </Link>
          <Link href="/dance-path" className="font-bold hover:text-black">
            Dance Path
          </Link>
          <Link href="/member-score" className="font-bold hover:text-black">
            Member Score
          </Link>
          <Link href="/danceClass/roomRental" className="font-bold hover:text-black">
            Rent
          </Link>
        </nav>

        {/* Icons and buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/favorites" aria-label="Favorites">
            <Heart className="h-6 w-6" />
          </Link>
          <Link href="/cart" aria-label="Shopping Cart">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <button
            variant="outline"
            className="btn btn-lg bg-white text-[#FF9933] hover:bg-black hover:text-white hover:cursor-pointer border-none transition-all duration-200 ease-in-out hover:shadow-[0_0_0_1px_white]"
          >
            <Link href="/login" aria-label="Login">
              Login
            </Link>
          </button>
          <button className="btn btn-lg bg-black text-white hover:bg-gray-800 border-none hover:cursor-pointer hover:bg-white hover:text-black hover:shadow-[0_0_0_1px_black]">
            <Link href="/register" aria-label="Register">
              Sign Up
            </Link>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#FF9933] z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                href="/about"
                className="hover:bg-[#e68a2e] py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About US
              </Link>
              <Link
                href="/tutor"
                className="hover:bg-[#e68a2e] py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutor
              </Link>
              <Link
                href="/dance-path"
                className="hover:bg-[#e68a2e] py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Dance Path
              </Link>
              <Link
                href="/member-score"
                className="hover:bg-[#e68a2e] py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Member Score
              </Link>
              <Link
                href="/danceClass/roomRental"
                className="hover:bg-[#e68a2e] py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <Link href="/favorites" aria-label="Favorites">
                  <Heart className="h-6 w-6" />
                </Link>
                <Link href="/cart" aria-label="Shopping Cart">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex flex-col space-y-2 pt-2">
                <button
                  variant="outline"
                  className="btn btn-lg bg-white text-[#FF9933] hover:bg-black hover:text-white hover:cursor-pointer border-none transition-all duration-200 ease-in-out hover:shadow-[0_0_0_1px_white]"
                >
                  <Link href="/login" aria-label="Login">
                    Login
                  </Link>
                </button>

                <button className="btn btn-lg bg-black text-white hover:bg-gray-800 border-none hover:cursor-pointer hover:bg-white hover:text-black hover:shadow-[0_0_0_1px_black]">
                  <Link href="/register" aria-label="Register">
                    Sign Up
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
