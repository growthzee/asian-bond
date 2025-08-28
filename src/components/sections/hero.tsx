"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      type: "video",
      title: "Manufacturing Process",
      description: "See how our premium products are made",
      videoUrl:
        "https://www.youtube.com/embed/YrZgVH8DKMM?autoplay=1&loop=1&playlist=YrZgVH8DKMM&mute=1&controls=0",
    },
    {
      type: "video",
      title: "Quality Control Process",
      description: "Our rigorous testing procedures",
      videoUrl:
        "https://www.youtube.com/embed/0IIaa8MBQsA?autoplay=1&loop=1&playlist=0IIaa8MBQsA&mute=1&controls=0",
    },
    {
      type: "video",
      title: "Product Application",
      description: "How to use our construction chemicals",
      videoUrl:
        "https://www.youtube.com/embed/VS6l_n1UOZM?autoplay=1&loop=1&playlist=VS6l_n1UOZM&mute=1&controls=0",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-orange-100/50 to-transparent rounded-full transform scale-150 translate-x-1/4 -translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                  🏗️ Trusted Since 1985
                </Badge>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Building Strong Foundations
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent block">
                    Enhancing Durability
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  ASIAN BOND is a leading provider of innovative construction
                  chemical solutions, dedicated to enhancing the strength,
                  durability, and sustainability of buildings and
                  infrastructure.
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

              {/* Quick Stats in Hero */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: "40+", label: "Years Experience" },
                  {
                    number: "10K+",
                    label: "Manufacturers in Cement Industries",
                  },
                  { number: "1000+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-xl font-bold text-orange-600">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Slider Section */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Slider Container */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20"></div>

                {/* Main Slide Display */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white">
                  <div className="relative">
                    <iframe
                      src={currentSlideData.videoUrl}
                      title={currentSlideData.title}
                      className="w-full h-80"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pointer-events-none">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {currentSlideData.description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>

                {/* Quality Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-orange-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">
                        Quality Assured
                      </div>
                      <div className="text-xs text-gray-600">ISO Certified</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-orange-500 scale-125 shadow-lg"
                        : "bg-orange-200 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
