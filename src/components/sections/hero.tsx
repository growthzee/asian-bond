"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-100/50 to-transparent rounded-full transform scale-150 translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                🏗️ Trusted Since 2015
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Strong Foundations
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent block">
                  Enhancing Durability
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                ASIAN BOND is a leading provider of innovative construction
                chemical solutions, dedicated to enhancing the strength,
                durability, and sustainability of buildings and infrastructure.
                With a focus on delivering high-quality products and exceptional
                customer service, we aim to be the preferred partner for
                construction professionals worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 group"
              >
                Explore Products
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-lg font-semibold bg-transparent"
              >
                Call (+91) 96509-39667
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "10K+", label: "Projects Completed" },
                { number: "500+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-orange-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20"></div>
              <Image
                src="/factory.jpg"
                alt="Construction Materials"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Quality Assured
                    </div>
                    <div className="text-sm text-gray-600">ISO Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
