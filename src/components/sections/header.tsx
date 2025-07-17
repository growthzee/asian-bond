"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const navigationItems = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clickable to homepage */}
          <Link
            href="/"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg">
              <Image src="/logo.png" alt="Logo" height={160} width={160} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ASIAN BOND</h1>
              <p className="text-xs text-orange-600 font-medium">
                MANUFACTURER & EXPORTER
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
