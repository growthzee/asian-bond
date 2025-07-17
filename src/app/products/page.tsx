"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Construction <span className="text-orange-600">Materials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium construction materials
              for all your building needs
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
                placeholder="Search products..."
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">
                      {product.availability}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-stone-100 text-stone-700 font-medium mb-3">
                    {product.subtitle}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      {/* <span className="text-lg font-bold text-orange-600">
                        {product.price}
                      </span> */}
                      <span className="text-sm text-gray-500">
                        {product.availability}
                      </span>
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold group cursor-pointer">
                        View Details
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No products found matching your criteria.
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

      <Footer />
    </div>
  );
}
