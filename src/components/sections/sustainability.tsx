import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, TrendingUp } from "lucide-react";
import Image from "next/image";

export function SustainabilitySection() {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description:
        "Sustainable and recycled materials that meet environmental standards",
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description:
        "Minimizing construction waste through efficient planning and recycling",
    },
    {
      icon: TrendingUp,
      title: "Energy Efficiency",
      description:
        "Materials that improve building energy performance and reduce carbon footprint",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-4">
              Sustainability
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building a <span className="text-green-600">Greener Future</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re committed to sustainable construction practices and
              eco-friendly materials that reduce environmental impact while
              maintaining superior quality.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg">
              Learn More About Sustainability
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/construction-men.jpg?height=600&width=600"
              alt="Sustainable Construction"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50%</div>
                <div className="text-sm text-gray-600">Carbon Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
