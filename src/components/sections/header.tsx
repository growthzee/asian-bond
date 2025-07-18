"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ImageIcon, Video } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const galleryItems = [
    { name: "Images", href: "/gallery/images", icon: ImageIcon },
    { name: "Videos", href: "/gallery/videos", icon: Video },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsGalleryOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsGalleryOpen(false);
  };

  const handleGalleryClick = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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

            {/* Gallery Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleGalleryClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group flex items-center"
              >
                Gallery
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isGalleryOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu */}
              {isGalleryOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-orange-100 py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {galleryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsGalleryOpen(false)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 group"
                    >
                      <item.icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
