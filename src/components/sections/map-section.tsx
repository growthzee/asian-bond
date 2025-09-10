import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Factory, Shield, Truck } from "lucide-react";

export function IndiaMapSection() {
  const features = [
    {
      icon: <Factory className="h-5 w-5" />,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facilities across India",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Nationwide Distribution",
      description: "Efficient supply chain management",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Quality Assurance",
      description: "ISO certified production standards",
    },
  ];

  return (
    <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-25">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Static Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 border-orange-200"
              >
                Our Presence
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Manufacturing Excellence
                <span className="text-orange-600 block">Across India</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With strategically located manufacturing facilities across
                India, we ensure efficient production and timely delivery to
                meet the growing demands of our customers nationwide.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Map of India */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-200">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden border-2 border-orange-100">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/MAPASIAN.webp"
                    alt="Complete map of India showing all states and territories"
                    className="w-full h-full object-contain filter brightness-110 contrast-110"
                    style={{
                      filter: "hue-rotate(25deg) saturate(1.2) brightness(1.1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
