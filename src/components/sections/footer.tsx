import { Building2, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">BuildMaster</h3>
                <p className="text-orange-400 text-sm">Premium Materials</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for premium construction materials and
              exceptional service since 1995.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@buildmaster.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  1234 Construction Ave, Builder City
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              {[
                "Concrete & Cement",
                "Structural Steel",
                "Aggregates",
                "Roofing Materials",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BuildMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
