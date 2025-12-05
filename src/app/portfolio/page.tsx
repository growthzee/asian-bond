"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Building,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Trophy,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Import your existing UI components
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- Data Definitions ---

const videos = [
  {
    id: "RIynJ0xbJ2M",
    title: "Application Guide",
  },
  {
    id: "vKkcmziIeqM",
    title: "Client Success",
  },
  {
    id: "tGRSnfTAcs4",
    title: "Concrete Science",
  },
  {
    id: "q-llnBeKR8A",
    title: "Site Visit",
  },

  {
    id: "VpSVyD_dl2Y",
    title: "Factory Tour",
  },

  {
    id: "ivSxTB2KMTo",
    title: "Testing Lab",
  },
];

const galleryImages = [
  {
    src: "/concrete1.png?height=600&width=800",
    category: "Products",
    title: "Concrete Hardener",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764929556/0F9A5067_xqxpgw.jpg",
    category: "Team",
    title: "",
  },

  {
    src: "/hardner.jpeg?q=80&w=800",
    category: "Products",
    title: "Concrete Hrdener",
  },
  {
    src: "/wall-putty-gallery.jpeg?height=600&width=800",
    category: "Products",
    title: "Hardener Drums",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852669/IMG-20250304-WA0004_xsplmp.jpg",
    category: "Work",
    title: "Work Sample",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764929556/0F9A5184_rtrnsc.jpg",
    category: "Team",
    title: "",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764929555/IMG_20250609_124338_g0vrpl.jpg",
    category: "Team",
    title: "",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764929555/IMG_20250608_100244_aalbun.jpg",
    category: "Team",
    title: "",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852739/IMG-20240928-WA0012_fvsgaj.jpg",
    category: "Work",
    title: "Work Sample",
  },
  {
    src: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852917/IMG-20241107-WA0000_elk4q0.jpg",
    category: "Work",
    title: "Work Sample",
  },
];

const galleryCategories = ["All", "Team", "Events", "Work", "Products"];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function PortfolioPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Carousel Ref
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Carousel Scroll Functions
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;

      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900 pt-20">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full"
        >
          <Image
            src="https://res.cloudinary.com/doy1iucnw/image/upload/v1764848900/536284509_1205205521622930_6881826495139769182_n_rxh3vu.jpg"
            alt="Construction Site Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto block"
            priority
          />
        </motion.div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image
                  src="https://res.cloudinary.com/doy1iucnw/image/upload/v1764930376/ab01_zyl2cl.jpg?q=80&w=1000"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-orange-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">40+</p>
                    <p className="text-slate-500 text-sm">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4"
              >
                WHO WE ARE
              </motion.h2>
              <motion.h3
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Strengthening the Future of Concrete
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-lg mb-8 leading-relaxed"
              >
                At Asian Bond, we specialize in advanced concrete hardener
                solutions designed to enhance durability, density, and long-term
                performance of all concrete surfaces. With decades of chemical
                expertise and on-site experience, our formulations consistently
                deliver high-strength, dust-free, and long-lasting results —
                making us one of the best concrete hardener in India trusted by
                builders and professionals. Our mission is simple — to provide
                powerful, cost-effective, and reliable concrete hardener
                solutions that upgrade ordinary floors into strong, sustainable,
                and superior surfaces.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                {[
                  { icon: Building, label: "500+ Projects Delivered" },
                  { icon: Users, label: "Expert Team" },
                  { icon: Briefcase, label: "Happy Clients" },
                  { icon: CheckCircle, label: "Certified Quality" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="text-orange-600 h-5 w-5" />
                    <span className="font-semibold text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. YOUTUBE REELS CAROUSEL SECTION */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          {/* UPDATED HEADER ALIGNMENT */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 md:gap-4">
            <div className="text-center md:text-left">
              <Badge className="bg-orange-600 text-white mb-4 border-none px-3 py-1 text-sm uppercase tracking-wide">
                Reels & Shorts
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Site Highlights
              </h2>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Arrows only visible on desktop/larger screens */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scrollCarousel("left")}
                  className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel("right")}
                  className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <Link
                href="https://www.youtube.com/@kadambariproducts-asianbon3314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent h-12 px-6"
                >
                  Visit YouTube Channel{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer relative min-w-[280px] sm:min-w-[300px] md:min-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-black snap-center flex-shrink-0"
              >
                <iframe
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />

                <div
                  className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 flex items-center">
                      <Play className="w-3 h-3 mr-1 fill-current" /> Tap for
                      Sound
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMAGE GALLERY (Categorized) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Work <span className="text-orange-600">Gallery</span>
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl aspect-[4/3]"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-3">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">{image.title}</span>
                    <span className="text-sm text-orange-200">
                      {image.category}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900 font-bold backdrop-blur-sm shadow-sm hover:bg-white">
                      {image.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- MODALS --- */}

      {/* Video Modal (Reels Format) */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div
              className="relative w-full max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&modestbranding=1&rel=0`}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
