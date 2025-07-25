"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X, ZoomIn, Download, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImagesGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

  const categories = [
    "All",
    "Products",
    "Manufacturing",
    "Projects",
    "Team",
    "Facilities",
  ];

  const images = [
    {
      id: 1,
      src: "/wall-putty-gallery.jpeg",
      title: "Asian Bond Wall Putty Production",
      category: "Manufacturing",
    },
    {
      id: 2,
      src: "/hardner.jpeg",
      title: "Quality Control Laboratory",
      category: "Facilities",
    },
    {
      id: 3,
      src: "/drums.jpeg",
      title: "Wall Putty Application",
      category: "Products",
    },
    {
      id: 4,
      src: "/drum.jpeg",
      title: "Construction Site Project",
      category: "Projects",
    },
    {
      id: 5,
      src: "/drum3.jpeg",
      title: "Expert Team Meeting",
      category: "Products",
    },
    {
      id: 6,
      src: "/img1.jpeg",
      title: "Team Collaboration",
      category: "Team",
    },
    {
      id: 7,
      src: "/wall-putty-gallery.jpeg",
      title: "Warehouse Operations",
      category: "Facilities",
    },
    {
      id: 8,
      src: "/wall-putty-gallery.jpeg",
      title: "Residential Project Completion",
      category: "Projects",
    },
    {
      id: 9,
      src: "/wall-putty-gallery.jpeg",
      title: "Manufacturing Process",
      category: "Manufacturing",
    },
    {
      id: 10,
      src: "/wall-putty-gallery.jpeg",
      title: "Quality Testing",
      category: "Facilities",
    },
    {
      id: 11,
      src: "/wall-putty-gallery.jpeg",
      title: "Product Packaging",
      category: "Products",
    },
    {
      id: 12,
      src: "/image3.jpeg",
      title: "Team Collaboration",
      category: "Team",
    },
  ];

  const filteredImages = images.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image: {
    src: string;
    title: string;
    category: string;
  }) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Minimal Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Explore our visual story through images
            </p>
          </div>
        </div>
      </section>

      {/* Floating Filter Bar */}
      <div className="top-24 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredImages.length}{" "}
              {filteredImages.length === 1 ? "image" : "images"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Images Grid - Masonry Style */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={400}
                      height={
                        index % 3 === 0 ? 500 : index % 3 === 1 ? 400 : 450
                      } // Varied heights for masonry effect
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-orange-500 text-white mb-2 text-xs">
                          {image.category}
                        </Badge>
                        <h3 className="text-white font-semibold text-sm leading-tight">
                          {image.title}
                        </h3>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(image);
                          }}
                          className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <ZoomIn className="h-4 w-4 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Download className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Info Bar */}
            <div className="absolute -top-16 left-0 flex items-center gap-4 text-white z-10">
              <Badge className="bg-orange-500 text-white">
                {selectedImage.category}
              </Badge>
              <h2 className="text-lg font-semibold">{selectedImage.title}</h2>
            </div>

            {/* Action Buttons */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                <Download className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
