"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-black">
            PECH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Navigation />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-0.5"
                  : "translate-y-1"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 space-y-2">
            <Navigation isMobile={true} onLinkClick={closeMobileMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
}
