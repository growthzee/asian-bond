import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Truck, Users, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Award,
      title: "Quality Guaranteed",
      description:
        "All materials meet or exceed industry standards with full certification",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery to keep your projects on schedule",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Our technical team provides guidance throughout your project",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Best Pricing",
      description: "Competitive rates without compromising on quality",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted{" "}
            <span className="text-orange-600">Construction Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With decades of experience, we deliver excellence in every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
