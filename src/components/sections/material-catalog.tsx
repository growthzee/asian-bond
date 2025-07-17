"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export function MaterialCatalogSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-5xl font-black text-stone-900 mb-6 leading-tight">
                MATERIAL
                <br />
                CATALOG
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Comprehensive range of construction materials sourced from
                trusted manufacturers worldwide.
              </p>
              <div className="mt-8">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white bg-transparent"
                  >
                    VIEW ALL PRODUCTS
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-8">
              {products.slice(0, 5).map((product, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-none bg-transparent group cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div
                        className={`space-y-4 ${
                          index % 2 === 1 ? "md:order-2" : ""
                        }`}
                      >
                        <div>
                          <Badge className="bg-stone-100 text-stone-700 font-medium mb-3">
                            {product.subtitle}
                          </Badge>
                          <h3 className="text-3xl font-black text-stone-900 mb-2">
                            {product.title}
                          </h3>
                          <p className="text-stone-600 leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {product.specs.map((spec, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-stone-600"
                            >
                              <div className="w-2 h-2 bg-stone-900 mr-3"></div>
                              {spec}
                            </li>
                          ))}
                        </ul>
                        <Link href={`/products/${product.id}`}>
                          <Button
                            variant="ghost"
                            className="text-stone-900 hover:bg-stone-100 p-0 h-auto font-bold group"
                          >
                            LEARN MORE
                            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <Link href={`/products/${product.id}`}>
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Show More Products Indicator */}
              {products.length > 5 && (
                <div className="text-center pt-8">
                  <p className="text-stone-600 mb-4">
                    Showing 5 of {products.length} products
                  </p>
                  <Link href="/products">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg">
                      VIEW ALL {products.length} PRODUCTS
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
