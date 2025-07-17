import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <div className="absolute inset-0 bg-white rounded-full transform scale-150 translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Get in touch with our experts today for a personalized quote and
            consultation. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 rounded-lg bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
