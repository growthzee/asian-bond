"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ImageIcon, Video, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Mobile specific states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: "ABOUT US", href: "/about" },
    { name: "CONCRETE HARDENER", href: "/concrete-hardener" },
    { name: "LEARNING", href: "/blogs" },
    { name: "CONTACT US", href: "/contact" },
    { name: "PORTFOLIO", href: "/portfolio" },
  ];

  const galleryItems = [
    { name: "Images", href: "/gallery/images", icon: ImageIcon },
    { name: "Videos", href: "/gallery/videos", icon: Video },
  ];

  // Desktop Handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsGalleryOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(false);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg bg-white">
              {/* Ensure image path is correct */}
              <Image
                src="/logo.png"
                alt="Logo"
                height={48}
                width={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-none">
                ASIAN BOND
              </h1>
              <p className="text-[10px] md:text-xs text-orange-600 font-medium tracking-wider">
                MANUFACTURER & EXPORTER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Desktop Gallery Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleGalleryClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-sm text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group flex items-center"
              >
                GALLERY
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isGalleryOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>

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
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 group"
                    >
                      <item.icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-orange-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-6 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Gallery Accordion */}
            <div className="px-4 py-2">
              <button
                onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-gray-700 hover:text-orange-600 mb-2"
              >
                GALLERY
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileGalleryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileGalleryOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-orange-100 ml-1 mt-2">
                  {galleryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold h-12 rounded-xl shadow-md">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
