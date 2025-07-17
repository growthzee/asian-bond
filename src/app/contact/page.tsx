"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  HeadphonesIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(+91) 96509-39667", "(+91) 94252-19403"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kadambariproducts@gmail.com"],
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Plot No. 48, Tifra Industrial Area, Bilaspur (C.G) India 495001",
      ],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-purple-600",
    },
  ];

  const faqs = [
    {
      question: "What types of construction materials do you manufacture?",
      answer:
        "We specialize in manufacturing high-quality wall putty, structural materials, and various construction chemicals. Our flagship product is the 100% waterproof Asian Bond Wall Putty, along with other premium construction materials.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we are exporters and ship our products internationally. We have experience serving customers across multiple countries and can arrange shipping to your location. Contact us for specific shipping details and costs.",
    },
    {
      question: "What is the minimum order quantity for bulk purchases?",
      answer:
        "Minimum order quantities vary by product. For wall putty, we typically require a minimum order of 100 bags. For other products, please contact our sales team for specific MOQ requirements and bulk pricing.",
    },
    {
      question: "Do you provide technical support and installation guidance?",
      answer:
        "We provide comprehensive technical support including product specifications, application guidelines, and installation support. Our technical team is available to assist with any questions about product usage.",
    },
    {
      question: "What quality certifications do your products have?",
      answer:
        "Our products meet international quality standards and we hold various certifications including ISO certifications. All our products undergo rigorous quality testing to ensure they meet or exceed industry standards.",
    },
    {
      question: "How can I become a distributor or dealer?",
      answer:
        "We welcome partnership opportunities with distributors and dealers. Please contact us through the form above or call our business development team to discuss partnership opportunities, territory availability, and requirements.",
    },
    {
      question: "What is your typical delivery time?",
      answer:
        "Delivery times vary based on location and order size. For domestic orders, we typically deliver within 7-15 business days. International orders may take 2-4 weeks depending on the destination and shipping method.",
    },
    {
      question: "Do you offer custom formulations or private labeling?",
      answer:
        "Yes, we offer custom formulations and private labeling services for qualified partners. Our R&D team can work with you to develop products that meet your specific requirements. Contact us to discuss your needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-orange-600">Asian Bond</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your construction material needs? Our expert team
              is here to help you find the perfect solutions for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <Card className="border-orange-100">
                <CardContent className="p-0">
                  <div className="h-80 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977!2d82.12733!3d22.070951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1c0b1c0b1c%3A0xee7c7c7c7c7c7c7c!2sTifra%20Industrial%20Area%2C%20Bilaspur%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Asian Bond Location - Tifra Industrial Area, Bilaspur"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="border-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Contact Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">Live Chat Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HeadphonesIcon className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">
                        24/7 Customer Support
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">
                        International Inquiries Welcome
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-orange-100 bg-orange-50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 24 hours during business
                    days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our
              products and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-orange-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
