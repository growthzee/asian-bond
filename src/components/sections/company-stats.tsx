import { Building2, Users, Globe, Award } from "lucide-react";

export function CompanyStatsSection() {
  const stats = [
    {
      icon: Building2,
      number: "2,500+",
      label: "Projects Delivered",
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
      label: "Cities Served",
      color: "text-green-600",
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      color: "text-purple-600",
    },
  ];

  return (
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
  );
}
