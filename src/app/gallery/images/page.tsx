"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Eye, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImagesGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      src: "/placeholder.svg?height=400&width=600",
      title: "Asian Bond Wall Putty Production",
      category: "Manufacturing",
      description:
        "State-of-the-art manufacturing facility producing premium wall putty",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "Quality Control Laboratory",
      category: "Facilities",
      description: "Advanced testing equipment ensuring product quality",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "Wall Putty Application",
      category: "Products",
      description: "Professional application of Asian Bond wall putty",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "Construction Site Project",
      category: "Projects",
      description: "Large-scale construction project using our materials",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Expert Team Meeting",
      category: "Team",
      description: "Our technical experts discussing project requirements",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Product Range Display",
      category: "Products",
      description: "Complete range of Asian Bond construction materials",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Warehouse Operations",
      category: "Facilities",
      description: "Efficient storage and distribution facility",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Residential Project Completion",
      category: "Projects",
      description: "Completed residential project showcasing our materials",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Manufacturing Process",
      category: "Manufacturing",
      description: "Advanced manufacturing process for construction chemicals",
    },
  ];

  const filteredImages = images.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Image Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Visual Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our manufacturing processes, products, projects, and team
              through our comprehensive image gallery
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => openLightbox(image.src)}
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white border-white hover:bg-gray-100"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No images found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
