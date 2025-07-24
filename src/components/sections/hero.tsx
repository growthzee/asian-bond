"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const slides = [
    {
      type: "image",
      src: "/factory.jpg",
      alt: "Asian Bond Manufacturing Facility",
      title: "State-of-the-art Manufacturing",
      description: "Modern production facility with advanced technology",
    },
    {
      type: "image",
      src: "/factory2.jpg?height=400&width=500&text=Wall+Putty+Production",
      alt: "Wall Putty Production Line",
      title: "Premium Wall Putty Production",
      description: "100% waterproof wall putty manufacturing process",
    },
    {
      type: "image",
      src: "/factory3.jpg?height=400&width=500&text=Quality+Control+Lab",
      alt: "Quality Control Laboratory",
      title: "Advanced Quality Testing",
      description: "Rigorous quality control and testing procedures",
    },
    {
      type: "video",
      thumbnail:
        "/factory4.jpg?height=400&width=500&text=Manufacturing+Process+Video",
      title: "Manufacturing Process",
      description: "See how our premium products are made",
      duration: "3:45",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

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
                  🏗️ Trusted Since 2015
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
                  { number: "10+", label: "Years Experience" },
                  { number: "10K+", label: "Projects Completed" },
                  { number: "500+", label: "Happy Clients" },
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
                  {currentSlideData.type === "image" ? (
                    <div className="relative">
                      <Image
                        src={currentSlideData.src || "/placeholder.svg"}
                        alt={currentSlideData.alt || ""}
                        width={500}
                        height={400}
                        className="w-full h-80 object-cover transition-all duration-500"
                      />
                      {/* Image Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {currentSlideData.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {currentSlideData.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div
                        className="w-full h-80 bg-cover bg-center relative cursor-pointer group"
                        style={{
                          backgroundImage: `url(${currentSlideData.thumbnail})`,
                        }}
                        onClick={() =>
                          openVideoModal(currentSlideData.videoUrl || "")
                        }
                      >
                        {/* Video Play Overlay - ONLY for video slides */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-orange-600 ml-1" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {currentSlideData.duration}
                        </div>
                      </div>

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {currentSlideData.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {currentSlideData.description}
                        </p>
                      </div>
                    </div>
                  )}

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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors text-2xl font-bold"
            >
              ×
            </button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              className="w-full h-full rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}
    </>
  );
}
