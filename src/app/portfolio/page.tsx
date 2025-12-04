"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle,
  ExternalLink,
  Package,
  Play,
  Trophy,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import your existing UI components
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- Data Definitions ---

const products = [
  {
    id: "concrete-hardner",
    title: "Concrete Hardner",
    subtitle: "Base Materials",
    description:
      "Welcome to ASIAN BOND, your premier destination for high-quality concrete hardeners. We are a leading manufacturer and supplier.",
    category: "Aggregates",
    image: "/concrete-hardner.jpg",
  },
  {
    id: "asian-bond-floor-hardner",
    title: "Asian Bond Floor Hardener",
    subtitle: "Foundation Materials",
    description:
      "Introducing Asian Bond Ironite Floor Hardener: the ultimate solution for fortifying and protecting your concrete floors.",
    category: "Steel Products",
    image: "/wall-hardner.png",
  },
  {
    id: "asian-bond-iron-oxides",
    title: "Asia Bond Iron Oxides",
    subtitle: "Base Materials",
    description:
      "Discover the power of color with Asian Bond Iron Oxide Pigments. The versatile solution for vibrant, long-lasting hues.",
    category: "Aggregates",
    image: "/iron-oxide.png",
  },
  {
    id: "asian-bond-demoulding-agent",
    title: "Asia Bond Demoulding Agent",
    subtitle: "Base Materials",
    description:
      "Asian Bond Demoulding Agent is the ultimate solution for effortless and efficient demoulding.",
    category: "Aggregates",
    image: "/demoulding-agent.png",
  },
  {
    id: "asian-bond-wall-putty",
    title: "Asian Bond Wall Putty",
    subtitle: "Foundation Materials",
    description:
      "Introducing 100% Waterproof ASIAN BOND WALL PUTTY - the ultimate solution for all your waterproofing needs!",
    category: "Wall Finishing",
    image: "/wall-putty.png",
  },
  {
    id: "asian-bond-curing-compound",
    title: "Asia Bond Curing Compound",
    subtitle: "Base Materials",
    description:
      "The advanced solution for optimal concrete curing and protection is Asian Bond Curing Compound.",
    category: "Aggregates",
    image: "/curing-compound.png",
  },
  {
    id: "asian-bond-tile-adhesive",
    title: "Asian Bond Tile Adhesive",
    subtitle: "Base Materials",
    description:
      "ASIAN BOND Tile Adhesive is a blended modified polymer cement base adhesive which improves the strength.",
    category: "Aggregates",
    image: "/tile-adhesive.png",
  },
  {
    id: "asian-bond-grout-powder",
    title: "Asian Bond Grout Powder",
    subtitle: "Base Materials",
    description:
      "ASIAN BOND Grout Powder is a polymer modified cement joint filler, used in both interior & exterior joints.",
    category: "Aggregates",
    image: "/grout-powder.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Metro Station Flooring",
    category: "Infrastructure",
    location: "New Delhi",
    image:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764851410/IMG_20250913_142627_marjvy.jpg?q=80&w=800",
    description:
      "High-traffic industrial flooring solution using Asian Bond Hardener.",
  },
  {
    id: 2,
    title: "Tech Park Warehouse",
    category: "Commercial",
    location: "Bangalore",
    image:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764851494/IMG_20251003_135308_klfcfo.jpg?q=80&w=800",
    description: "Dust-proof coating for 50,000 sq.ft server storage facility.",
  },
  {
    id: 3,
    title: "Luxury Hotel Driveway",
    category: "Hospitality",
    location: "Mumbai",
    image:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764851624/IMG_20250108_113857_r8klqj.jpg?q=80&w=800",
    description:
      "Decorative polished concrete finish with high abrasion resistance.",
  },
];

const videos = [
  {
    id: "VS6l_n1UOZM",
    title: "Application Guide: Step by Step",
    thumbnail:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574316/VS6l_n1UOZM-HD_qv93an.jpg",
  },
  {
    id: "RBap5x65KIo",
    title: "Client Success Story: Warehouse",
    thumbnail:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574554/RBap5x65KIo-HD_bgdfxv.jpg",
  },
  {
    id: "I9R9tJNJRE8",
    title: "The Science of Concrete",
    thumbnail:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574882/I9R9tJNJRE8-HD_mgsrra.jpg",
  },
];

const galleryImages = [
  "/wall-putty-gallery.jpeg?height=600&width=800",
  "/concrete2.png?height=600&width=800",
  "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852917/IMG-20241107-WA0000_elk4q0.jpg?height=600&width=800",
  "/hardner.jpeg?q=80&w=800",
  "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852669/IMG-20250304-WA0004_xsplmp.jpg?q=80&w=800",
  "https://res.cloudinary.com/doy1iucnw/image/upload/v1764852739/IMG-20240928-WA0012_fvsgaj.jpg?q=80&w=800",
];

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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
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
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image
                  src="/image3.jpeg?q=80&w=1000"
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

            {/* Content Side */}
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
                Who We Are
              </motion.h2>
              <motion.h3
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Engineering the Future of Concrete
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-lg mb-8 leading-relaxed"
              >
                At Asian Bond, we combine advanced chemical engineering with
                on-site expertise to transform ordinary concrete into
                extraordinary surfaces. Our mission is to provide durable,
                sustainable, and cost-effective solutions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                {[
                  { icon: Building, label: "500+ Projects" },
                  { icon: Users, label: "Happy Clients" },
                  { icon: Briefcase, label: "Expert Team" },
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

      {/* 3. OUR PRODUCTS SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-orange-600 text-white mb-4 border-none px-4 py-1.5 text-sm uppercase tracking-wider">
              Product Catalog
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Premium Construction{" "}
              <span className="text-orange-600">Chemicals</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Advanced chemical formulations designed to enhance the strength,
              durability, and aesthetics of your concrete surfaces.
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-slate-50 overflow-hidden p-6 flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-slate-800 text-xs font-bold shadow-sm backdrop-blur-sm"
                    >
                      {product.category}
                    </Badge>
                  </div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <div className="text-xs text-orange-600 font-semibold mb-2 uppercase tracking-wide">
                      {product.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer of Card - Price Removed, Button Full Width */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-slate-900 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Package className="w-4 h-4 mr-2" /> View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all px-8 h-12"
              >
                View Full Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured <span className="text-orange-600">Projects</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successfully completed projects across
              various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-orange-700 hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                    <Building className="h-3 w-3" /> {project.location}
                  </p>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-orange-600 font-semibold text-sm hover:underline"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. YOUTUBE VIDEO GALLERY */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <Badge className="bg-orange-600 text-white mb-4 border-none">
                Tutorials & Showcases
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Watch Us Work</h2>
            </div>
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
            >
              Visit YouTube Channel <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setPlayingVideo(video.id)}
                className="group cursor-pointer relative aspect-video rounded-xl overflow-hidden border border-slate-700 shadow-xl"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-600/90 flex items-center justify-center pl-1 text-white shadow-lg group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-300">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-white font-medium truncate">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMAGE GALLERY (Masonry Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Work <span className="text-orange-600">Gallery</span>
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group rounded-2xl overflow-hidden break-inside-avoid cursor-zoom-in shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODALS --- */}

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
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
