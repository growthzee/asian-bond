import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogById } from "@/lib/blogs";
import { ArrowLeft, CalendarDays, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    notFound();
  }

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
            <Link href="/blogs" className="hover:text-orange-600">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-gray-900 line-clamp-1">{blog.title}</span>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Featured Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Header */}
            <div>
              <Badge className="bg-orange-100 text-orange-700 mb-3">
                {blog.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center text-gray-600 space-x-6 text-lg">
                <div className="flex items-center">
                  <User2 className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Back to Blogs */}
            <div className="pt-8 border-t border-gray-200">
              <Link href="/blogs">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Blogs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
