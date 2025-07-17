"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function AboutPage() {
  const stats = [
    {
      icon: Building2,
      number: "25+",
      label: "Years Experience",
      color: "text-orange-600",
    },
    {
      icon: Users,
      number: "150+",
      label: "Expert Team",
      color: "text-blue-600",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      color: "text-green-600",
    },
    {
      icon: Award,
      number: "100+",
      label: "Quality Certifications",
      color: "text-purple-600",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in manufacturing and quality control processes.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Our customers' success is our priority, driving everything we do.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality and on-time delivery you can count on.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Continuously improving our products and processes for better solutions.",
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "Started as a small manufacturing unit with a vision for quality construction materials.",
    },
    {
      year: "2005",
      title: "First Export",
      description:
        "Expanded internationally, beginning our journey as a global supplier.",
    },
    {
      year: "2012",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification for quality management systems.",
    },
    {
      year: "2018",
      title: "Modern Facility",
      description:
        "Opened state-of-the-art manufacturing facility with advanced technology.",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description:
        "Launched eco-friendly product line and sustainable manufacturing practices.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "25+ years of experience in construction materials industry.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Quality",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in quality control and product development.",
    },
    {
      name: "Amit Patel",
      role: "Export Manager",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Leading our international expansion and client relationships.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
                About Asian Bond
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Trust Through
                <span className="text-orange-600 block">
                  Quality & Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over 25 years, Asian Bond has been a trusted manufacturer
                and exporter of premium construction materials, serving clients
                across 50+ countries with unwavering commitment to quality and
                innovation.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Asian Bond Manufacturing Facility"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">ISO</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-orange-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="border-orange-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide world-class construction materials that exceed
                  customer expectations while maintaining the highest standards
                  of quality, safety, and environmental responsibility. We
                  strive to be the preferred partner for construction
                  professionals worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in innovative construction materials,
                  setting industry benchmarks for quality and sustainability. We
                  envision a future where our products contribute to building
                  stronger, safer, and more sustainable communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every product we
              create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of our growth and key achievements over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="border-orange-100 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-orange-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Leadership Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Quality Assurance
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by international
              certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management" },
              { name: "ISO 14001", desc: "Environmental Management" },
              { name: "CE Marking", desc: "European Conformity" },
              { name: "BIS Certification", desc: "Bureau of Indian Standards" },
              { name: "Export License", desc: "Government Approved" },
            ].map((cert, index) => (
              <Card
                key={index}
                className="text-center border-orange-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers worldwide who trust Asian
              Bond for their construction material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 rounded-lg shadow-lg"
                >
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 rounded-lg bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
