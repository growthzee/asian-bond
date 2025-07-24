"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Arjun Sharma",
      content:
        "Incredible results! Our construction projects have been elevated to a whole new level since partnering with Asian Bond. Their construction chemical solutions have consistently delivered outstanding performance, ensuring the durability and longevity of our structures. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      content:
        "A game-changer for our business! Asian Bond's construction chemical solutions have streamlined our processes and significantly improved our efficiency. From concrete admixtures to waterproofing solutions, their products have proven to be reliable and effective. We couldn't be happier with the results",
      rating: 5,
    },
    {
      name: "Rajan Kapoor",
      content:
        "Top-notch quality and service! Asian Bond has become our go-to supplier for all construction chemical needs. Their team of experts guided us through product selection, offering tailored solutions for our specific projects. Thanks to their products, we've achieved remarkable outcomes, leaving our clients impressed.",
      rating: 5,
    },
    {
      name: "Ayesha Gupta",
      content:
        "Trustworthy and innovative! Asian Bond sets the standard in the construction chemical industry. We've witnessed their commitment to research and development, as they continuously introduce cutting-edge solutions that enhance our construction practices. Working with them has been a delight, and we look forward to a long-lasting partnership.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to get the first letter of the name
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Function to generate a consistent color based on the name
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-green-500 to-green-600",
      "bg-gradient-to-br from-purple-500 to-purple-600",
      "bg-gradient-to-br from-red-500 to-red-600",
      "bg-gradient-to-br from-indigo-500 to-indigo-600",
      "bg-gradient-to-br from-pink-500 to-pink-600",
    ];

    // Use the first character's char code to determine color
    const colorIndex = name.charCodeAt(0) % colors.length;
    return colors[colorIndex];
  };

  // Get current testimonials to display (3 at a time)
  const getCurrentTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
            Client Reviews
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:border-orange-300 shadow-lg"
          >
            <ChevronLeft className="h-4 w-4 text-orange-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:border-orange-300 shadow-lg"
          >
            <ChevronRight className="h-4 w-4 text-orange-600" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {getCurrentTestimonials().map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="bg-white border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    {/* Avatar with first letter */}
                    <div
                      className={`w-15 h-15 rounded-full flex items-center justify-center text-white font-bold text-xl ${getAvatarColor(
                        testimonial.name
                      )} shadow-lg`}
                    >
                      {getInitial(testimonial.name)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-orange-200 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
