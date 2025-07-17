import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllProducts, getProductById } from "@/lib/products";
import {
  ArrowLeft,
  Check,
  Download,
  Mail,
  Phone,
  Share2,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageGallery } from "./image-gallery";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-orange-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <ImageGallery gallery={product.gallery} title={product.title} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-orange-100 text-orange-700 mb-3">
                  {product.subtitle}
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      (4.8/5 - 124 reviews)
                    </span>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Quote
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Inquiry
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Applications
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.technicalSpecs).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}:</span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-500 text-orange-600 bg-transparent"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
