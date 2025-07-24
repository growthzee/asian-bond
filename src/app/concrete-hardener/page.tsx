"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Award,
  Shield,
  Zap,
  Droplets,
  Clock,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConcreteHardenerPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    "/concrete1.png?height=600&width=800&text=Concrete+Hardener+Application",
    "/concrete2.png?height=600&width=800&text=Industrial+Floor+Treatment",
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "Superior Surface Hardness",
      description:
        "Our concrete hardeners penetrate deep into the concrete matrix, forming a robust chemical bond that significantly improves the hardness and strength of the surface. This results in reduced surface wear, increased resistance to impact and abrasion, and enhanced longevity of the concrete.",
    },
    {
      icon: Droplets,
      title: "Dust Reduction",
      description:
        "Our hardeners effectively minimize dusting issues commonly associated with untreated or poorly treated concrete surfaces. By sealing the surface and minimizing the release of fine particles, our products contribute to a cleaner and healthier working environment.",
    },
    {
      icon: Award,
      title: "Enhanced Chemical Resistance",
      description:
        "Our concrete hardeners create a protective barrier that enhances the concrete's resistance to chemical attacks, including exposure to acids, alkalis, oils, and other contaminants. This added protection ensures long-term durability and extends the lifespan of the concrete.",
    },
    {
      icon: Zap,
      title: "Easy Application and Fast Curing",
      description:
        "Our concrete hardeners are user-friendly, allowing for easy application on both new and existing concrete surfaces. They are available in various forms, including liquid and powder, providing flexibility to meet project requirements. Additionally, our products offer fast curing times, allowing for quick turnaround and minimizing project downtime.",
    },
    {
      icon: Wrench,
      title: "Versatile Applications",
      description:
        "Our concrete hardeners are suitable for a wide range of applications, including industrial floors, warehouses, parking structures, commercial buildings, and residential projects. They can be used on both interior and exterior surfaces, making them a versatile solution for all your concrete hardening needs.",
    },
    {
      icon: Clock,
      title: "Quick Demoulding",
      description:
        "Our concrete hardeners ensure quick demoulding of paver blocks or fly ash bricks which leads to quick dispatch of materials.",
    },
  ];

  const productTypes = [
    {
      name: "Silver",
      tier: "Standard",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      features: [
        "Basic surface hardening",
        "Dust reduction properties",
        "Suitable for light traffic areas",
        "Cost-effective solution",
        "Easy application process",
        "Standard curing time",
      ],
      applications: [
        "Residential floors",
        "Light commercial areas",
        "Walkways",
        "Patios",
      ],
      price: "Contact for pricing",
    },
    {
      name: "Gold",
      tier: "Premium",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      features: [
        "Enhanced surface hardness",
        "Superior dust control",
        "Medium to heavy traffic resistance",
        "Chemical resistance",
        "Fast curing formula",
        "Professional grade quality",
      ],
      applications: [
        "Commercial buildings",
        "Warehouses",
        "Retail spaces",
        "Office complexes",
      ],
      price: "Contact for pricing",
      popular: true,
    },
    {
      name: "Diamond",
      tier: "Ultra Premium",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Maximum surface hardness",
        "Complete dust elimination",
        "Heavy industrial traffic resistance",
        "Superior chemical resistance",
        "Ultra-fast curing",
        "Premium industrial grade",
      ],
      applications: [
        "Industrial floors",
        "Manufacturing facilities",
        "Heavy machinery areas",
        "High-traffic zones",
      ],
      price: "Contact for pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-orange-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">Concrete Hardener</span>
          </div>
        </div>
      </section>

      {/* Hero Section with Image Gallery */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={galleryImages[selectedImage] || "/placeholder.svg"}
                  alt="Concrete Hardener"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-lg border-2 ${
                      selectedImage === index
                        ? "border-orange-500"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-orange-100 text-orange-700 mb-3">
                  Premium Construction Chemical
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  ASIAN BOND
                  <span className="text-orange-600 block">
                    CONCRETE HARDENER
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your premier destination for high-quality concrete hardeners.
                  We are a leading manufacturer and supplier of advanced
                  concrete chemical solutions designed to enhance the strength,
                  durability, and performance of concrete surfaces.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Benefits:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Surface Hardness",
                    "Dust Reduction",
                    "Chemical Resistance",
                    "Fast Curing",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg cursor-pointer">
                    Get Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About ASIAN BOND Concrete Hardeners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ASIAN BOND, we take pride in offering a comprehensive range of
              concrete hardeners that are engineered to meet the specific needs
              of various construction projects. Our concrete hardeners are
              formulated with state-of-the-art technology and the finest raw
              materials, ensuring outstanding results in terms of surface
              hardness and abrasion resistance.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Key Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Features and <span className="text-orange-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why ASIAN BOND Concrete Hardeners are the preferred
              choice for construction professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Product Range
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Three Categories of{" "}
              <span className="text-orange-600">
                ASIAN BOND CONCRETE HARDENER
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect concrete hardener solution for your specific
              project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productTypes.map((product, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  product.borderColor
                } ${product.popular ? "ring-2 ring-orange-500" : ""}`}
              >
                {product.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className={`p-8 ${product.bgColor}`}>
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center`}
                    >
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{product.tier}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Applications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-center mb-4">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price}
                        </span>
                      </div>
                      <Link href="/contact">
                        <Button
                          className={`w-full ${
                            product.popular
                              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white cursor-pointer"
                              : "border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent cursor-pointer"
                          }`}
                          variant={product.popular ? "default" : "outline"}
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Applications
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Versatile <span className="text-orange-600">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our concrete hardeners are suitable for both interior and exterior
              surfaces across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industrial Floors",
                description: "Heavy-duty flooring for manufacturing facilities",
                icon: "🏭",
              },
              {
                title: "Warehouses",
                description: "Durable surfaces for storage and logistics",
                icon: "🏢",
              },
              {
                title: "Parking Structures",
                description: "Long-lasting protection for vehicle traffic",
                icon: "🚗",
              },
              {
                title: "Commercial Buildings",
                description: "Professional-grade flooring solutions",
                icon: "🏬",
              },
              {
                title: "Residential Projects",
                description: "Quality hardening for home applications",
                icon: "🏠",
              },
              {
                title: "Paver Blocks",
                description: "Quick demoulding for efficient production",
                icon: "🧱",
              },
              {
                title: "Fly Ash Bricks",
                description: "Enhanced strength and quick dispatch",
                icon: "🔲",
              },
              {
                title: "High-Traffic Areas",
                description: "Superior durability for busy locations",
                icon: "🚶",
              },
            ].map((app, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Strengthen Your Concrete?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts today to find the perfect concrete hardener
              solution for your project. Get professional advice and competitive
              pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 rounded-lg shadow-lg"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 rounded-lg bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
