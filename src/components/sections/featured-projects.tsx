import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Metropolitan Tower",
      category: "Commercial",
      location: "Downtown District",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Steel Framework", "Concrete", "Glass Panels"],
      completion: "2023",
    },
    {
      title: "Riverside Residential",
      category: "Residential",
      location: "Riverside Community",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Brick", "Roofing", "Insulation"],
      completion: "2023",
    },
    {
      title: "Industrial Complex",
      category: "Industrial",
      location: "Manufacturing Zone",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Heavy Steel", "Concrete Slabs", "Safety Systems"],
      completion: "2024",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
            Our Work
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover some of our most successful construction projects across
            various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  {project.location}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Materials Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Completed: {project.completion}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
