"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Play, Clock, Eye } from "lucide-react";
import { useState } from "react";

export default function VideosGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    "All",
    "Manufacturing",
    "Product Demo",
    "Projects",
    "Company",
    "Training",
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Asian Bond Wall Putty Manufacturing Process",
      category: "Manufacturing",
      duration: "3:45",
      description:
        "Complete overview of our advanced wall putty manufacturing process",
      videoUrl: "https://youtu.be/uhg4WEoh9vw",
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Product Application Demonstration",
      category: "Product Demo",
      duration: "2:30",
      description: "Step-by-step guide on how to apply Asian Bond wall putty",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Company Overview and Vision",
      category: "Company",
      duration: "4:15",
      description:
        "Learn about Asian Bond's journey, mission, and future goals",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Large Scale Construction Project",
      category: "Projects",
      duration: "5:20",
      description:
        "Time-lapse of a major construction project using our materials",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Quality Control and Testing",
      category: "Manufacturing",
      duration: "3:10",
      description: "Behind the scenes look at our quality assurance processes",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      thumbnail: "/placeholder.svg?height=300&width=500",
      title: "Professional Training Workshop",
      category: "Training",
      duration: "6:45",
      description:
        "Training session for contractors on proper application techniques",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Video Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Watch Our <span className="text-orange-600">Story Unfold</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our manufacturing excellence, product demonstrations, and
              project showcases through our video collection
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
                placeholder="Search videos..."
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

      {/* Videos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-48 bg-cover bg-center relative cursor-pointer"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                    onClick={() => openVideoModal(video.videoUrl)}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-orange-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">
                      {video.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <Button
                    onClick={() => openVideoModal(video.videoUrl)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No videos found matching your criteria.
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

      <Footer />
    </div>
  );
}
