import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Link
                href="/"
                className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg">
                  <Image src="/logo.png" alt="Logo" height={160} width={160} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white whitespace-nowrap">
                    ASIAN BOND
                  </h1>
                  <p className="text-xs text-orange-600 font-medium whitespace-nowrap">
                    MANUFACTURER & EXPORTER
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for premium construction materials and
              exceptional service since 2015.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300"> (+91) 96509-39667 </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  kadambariproducts@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  M/S Kadambari Products, Plot No. 48, Tifra Industrial Area,
                  Bilaspur (C.G) India 495001
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              {[
                "Wall Putty",
                "Structural Steel",
                "Aggregates",
                "Construction Materials",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
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
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/#services" },
                { name: "Projects", href: "/#projects" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Asian Bond. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
