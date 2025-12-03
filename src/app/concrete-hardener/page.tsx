"use client";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Beaker,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  Droplets,
  Facebook,
  FileText,
  Globe,
  Handshake,
  Instagram,
  Phone,
  Play,
  Shield,
  TrendingUp,
  Wrench,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConcreteHardenerPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const galleryImages = [
    "/concrete1.png?height=800&width=1200&text=Concrete+Hardener+Application",
    "/concrete2.png?height=800&width=1200&text=Industrial+Floor+Treatment",
    "/concrete3.png?height=800&width=1200&text=Polished+Finish+Result",
  ];

  const videos = [
    {
      id: "VS6l_n1UOZM",
      title: "CONCRETE HARDNER - INDIA’s BEST CONCRETE HARDNER ASIAN BOND",
      thumbnail:
        "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574316/VS6l_n1UOZM-HD_qv93an.jpg",
    },
    {
      id: "RBap5x65KIo",
      title: "ASIAN BOND CONCRETE HARDENER FOR FLY ASH BRICKS & PAVERS",
      thumbnail:
        "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574554/RBap5x65KIo-HD_bgdfxv.jpg",
    },
    {
      id: "I9R9tJNJRE8",
      title: "ASIAN BOND CONCRETE HARDNER CHEMICAL FOR FLY ASH & PAVER BLOCKS",
      thumbnail:
        "https://res.cloudinary.com/doy1iucnw/image/upload/v1764574882/I9R9tJNJRE8-HD_mgsrra.jpg",
    },
  ];

  const techSpecs = [
    { label: "Appearance", value: "Clear, colorless liquid" },
    { label: "Specific Gravity", value: "1.10 ± 0.02 @ 25°C" },
    { label: "pH Value", value: "11 - 12" },
    { label: "Coverage", value: "4-6 m² per kg (depending on porosity)" },
    { label: "Flash Point", value: "Not applicable (Water-based)" },
    { label: "Shelf Life", value: "12 months in original sealed container" },
    { label: "Packaging", value: "20kg, 50kg, 200kg drums" },
  ];

  const applicationSteps = [
    {
      title: "Surface Preparation",
      desc: "Ensure the concrete surface is clean, dry, and free from oil, grease, or dust. Fill any cracks or holes before application.",
    },
    {
      title: "Application",
      desc: "Spray or pour Asian Bond Hardener evenly over the surface. Use a soft broom or microfiber pad to spread it uniformly.",
    },
    {
      title: "Absorption & Re-wetting",
      desc: "Keep the surface wet with the product for 30-45 minutes. If dry spots appear, apply more product immediately.",
    },
    {
      title: "Cleaning & Polishing",
      desc: "After absorption, rinse the floor with water and remove excess material. Allow to dry, then buff for a high-gloss finish.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to cure?",
      a: "The treated surface is usually walkable within 2-4 hours. However, full chemical curing and maximum hardness are achieved over 7 days.",
    },
    {
      q: "Can this be used on old concrete?",
      a: "Yes! Asian Bond Concrete Hardener acts as a densifier and can rejuvenate old, dusting concrete floors, provided they are structurally sound and clean.",
    },
    {
      q: "Does it change the color of the concrete?",
      a: "No, the liquid is clear. However, upon polishing, the concrete will develop a natural, glossy sheen that enhances the existing look.",
    },
    {
      q: "Is it safe for food processing units?",
      a: "Yes, our formula is non-toxic, water-based, and VOC-free, making it safe for warehouses, kitchens, and food processing facilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Video Modal Overlay */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <section className="pt-28 pb-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-orange-600 transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-orange-600">Concrete Hardener</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-white via-orange-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white group">
                <Image
                  src={galleryImages[selectedImage] || "/placeholder.svg"}
                  alt="Concrete Hardener Application"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-orange-500 ring-2 ring-orange-200 scale-95 opacity-100"
                        : "border-gray-100 hover:border-orange-300 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-orange-600 text-white hover:bg-orange-700 px-3 py-1">
                    Best Seller
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-green-600 text-green-700 bg-green-50"
                  >
                    Eco-Friendly
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                  ASIAN BOND
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 block mt-2">
                    CONCRETE HARDENER
                  </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-200 pl-4">
                  Engineer unmatched durability into your floors. Our advanced
                  lithium-silicate formula penetrates deep to transform soft
                  concrete into a dust-proof, wear-resistant surface that lasts
                  for decades.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg shadow-orange-100/50 border border-orange-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Increases Surface Hardness by 40%",
                    "Permanent Dust Elimination",
                    "Resists Oil & Chemical Spills",
                    "High Gloss Polishable Finish",
                    "VOC Free & Odorless",
                    "Cost Effective Maintenance",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center group">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 px-8 shadow-lg shadow-orange-200"
                  >
                    Get a Quote
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 h-12"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section (New) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Beaker className="w-8 h-8 text-orange-600 mr-3" />
                Technical Specifications
              </h2>
              <p className="text-slate-600 mb-8">
                Asian Bond Concrete Hardener is manufactured under strict
                quality control standards. Below are the technical properties
                for engineering reference.
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                    <tr>
                      <th className="px-6 py-4">Property</th>
                      <th className="px-6 py-4">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {techSpecs.map((spec, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-slate-700 bg-slate-50/50">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-slate-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100 w-full">
                  <div className="p-2 bg-white rounded-full text-orange-600 shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Technical Data Sheet
                    </p>
                    <p className="text-xs text-slate-500">PDF (2.4 MB)</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-orange-600 hover:text-orange-700 hover:bg-orange-100"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>

            {/* Comparison Chart (New) */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why We Are Better
              </h2>
              <p className="text-slate-600 mb-8">
                See how Asian Bond compares to standard silicate hardeners in
                the market.
              </p>

              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="col-span-1 font-bold text-slate-700">
                    Penetration Depth
                  </div>
                  <div className="col-span-1 text-center text-red-400 text-sm">
                    <span className="block font-bold">Standard</span>
                    2-3 mm
                  </div>
                  <div className="col-span-1 text-center text-green-600 text-sm bg-green-50 py-2 rounded-lg border border-green-100">
                    <span className="block font-bold">Asian Bond</span>
                    5-8 mm
                  </div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="col-span-1 font-bold text-slate-700">
                    Gloss Level
                  </div>
                  <div className="col-span-1 text-center text-red-400 text-sm">
                    <span className="block font-bold">Standard</span>
                    Low - Medium
                  </div>
                  <div className="col-span-1 text-center text-green-600 text-sm bg-green-50 py-2 rounded-lg border border-green-100">
                    <span className="block font-bold">Asian Bond</span>
                    High Gloss
                  </div>
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="col-span-1 font-bold text-slate-700">
                    Curing Time
                  </div>
                  <div className="col-span-1 text-center text-red-400 text-sm">
                    <span className="block font-bold">Standard</span>
                    12-24 Hours
                  </div>
                  <div className="col-span-1 text-center text-green-600 text-sm bg-green-50 py-2 rounded-lg border border-green-100">
                    <span className="block font-bold">Asian Bond</span>
                    2-4 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process (New) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-wider text-sm uppercase">
              Easy to Use
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
              Application Process
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {applicationSteps.map((step, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full hover:-translate-y-2 transition-transform duration-300 relative">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 absolute -top-6 left-6 shadow-lg border-4 border-slate-50">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 text-white mb-4 hover:bg-orange-700 border-none">
              Watch & Learn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              See It In Action
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Visual proof of our product&apos;s performance and detailed
              application tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-orange-900/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-slate-700"
                onClick={() => setPlayingVideo(video.id)}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-slate-800">
                  <h3 className="font-semibold text-lg text-white group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid with more Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Engineered for Excellence
            </h2>
            <p className="text-slate-600 mt-4">
              Suitable for everything from home garages to aircraft hangars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Hardness",
                desc: "Forms Calcium Silicate Hydrate (CSH) gel to fill pores.",
              },
              {
                icon: Droplets,
                title: "Dust Proofing",
                desc: "Locks in concrete salts to prevent surface dusting completely.",
              },
              {
                icon: Award,
                title: "Chemical Resistant",
                desc: "Impervious to motor oil, transmission fluid, and mild acids.",
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                desc: "Floors can be put back into service within hours, not days.",
              },
              {
                icon: Wrench,
                title: "Low Maintenance",
                desc: "Simply clean with water. No waxing or stripping required.",
              },
              {
                icon: Clock,
                title: "Long Lasting",
                desc: "One time application provides protection for the life of the concrete.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (New) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800 text-lg">
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-orange-600" />
                  ) : (
                    <ChevronDown className="text-slate-400" />
                  )}
                </button>
                <div
                  className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealership Opportunity Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fb923c 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] px-6 py-16 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 mb-6 border-none px-4 py-1.5 text-sm">
                    Business Growth
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Join Our Dealer Network
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Partner with India&apos;s fastest-growing construction
                    chemical brand. We offer high margins, exclusive
                    territories, and complete marketing support.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700 font-bold px-8"
                    >
                      Apply Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
                    >
                      <Phone className="mr-2 h-4 w-4" /> (+91) 96509-39667
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      title: "High Margins",
                      desc: "Best in class ROI for dealers",
                      icon: TrendingUp,
                    },
                    {
                      title: "Exclusive Area",
                      desc: "No competition in your zone",
                      icon: Globe,
                    },
                    {
                      title: "Marketing Kits",
                      desc: "Free branding materials",
                      icon: Handshake,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-slate-800 rounded-lg text-orange-400 border border-slate-700">
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Connection */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-10 rounded-3xl">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Stay Connected
              </h2>
              <p className="text-slate-600 mt-2">
                Follow us for application tips and new product launches.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/ASIANBONDGLOBAL",
                  color: "text-blue-600",
                  bg: "hover:bg-blue-600",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/asianbondglobal",
                  color: "text-pink-600",
                  bg: "hover:bg-pink-600",
                },

                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@kadambariproducts-asianbon3314",
                  color: "text-red-600",
                  bg: "hover:bg-red-600",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-full ${social.color} ${social.bg} hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
