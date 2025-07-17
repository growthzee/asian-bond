import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Download, Play } from "lucide-react";

export function ToolsResourcesSection() {
  const resources = [
    {
      icon: Calculator,
      title: "Material Calculator",
      description: "Calculate exact material quantities for your project",
      action: "Calculate Now",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Technical Specs",
      description: "Download detailed specifications and data sheets",
      action: "View Specs",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Download,
      title: "CAD Files",
      description: "Access CAD files and technical drawings",
      action: "Download",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Play,
      title: "Video Guides",
      description: "Watch installation and usage video tutorials",
      action: "Watch Now",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
            Tools & Resources
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-orange-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive tools and resources to streamline your
            construction projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${resource.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
