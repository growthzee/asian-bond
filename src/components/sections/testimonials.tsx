import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Project Manager",
      company: "Urban Development Corp",
      content:
        "BuildMaster has been our trusted partner for over a decade. Their materials are consistently high-quality and their service is unmatched.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Williams",
      role: "Chief Engineer",
      company: "Metropolitan Construction",
      content:
        "The technical expertise and support we receive from their team has been invaluable to our complex infrastructure projects.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Rodriguez",
      role: "Operations Director",
      company: "Skyline Builders",
      content:
        "Reliable delivery and competitive pricing without compromising on quality. They understand the demands of large-scale construction.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
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
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-orange-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
