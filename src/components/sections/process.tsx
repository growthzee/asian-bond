import { Badge } from "@/components/ui/badge";
import { Users, Target, Factory, Truck } from "lucide-react";

export function ProcessSection() {
  const processes = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We analyze your project requirements and provide expert recommendations",
      icon: Users,
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Detailed material planning and timeline development for your project",
      icon: Target,
    },
    {
      step: "03",
      title: "Sourcing",
      description:
        "Quality material sourcing from our trusted network of suppliers",
      icon: Factory,
    },
    {
      step: "04",
      title: "Delivery",
      description: "On-time delivery with full quality assurance and support",
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We <span className="text-orange-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures quality delivery from consultation
            to completion
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <process.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                  {process.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-200"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
