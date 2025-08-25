"use client";

interface Testimonial {
  id: number;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoUrl:
      "https://res.cloudinary.com/doy1iucnw/video/upload/v1756103828/segment_video_2_2_suqd8o.mp4",
    thumbnail: "/industrial-manufacturing-client-testimonial.png",
  },
  {
    id: 2,
    videoUrl:
      "https://res.cloudinary.com/doy1iucnw/video/upload/v1756104631/segment_video_2_19_h28kwy.mp4",
    thumbnail: "/automotive-industry-client-testimonial.png",
  },
  {
    id: 3,
    videoUrl:
      "https://res.cloudinary.com/doy1iucnw/video/upload/v1756104666/segment_video_2_14_hibuez.mp4",
    thumbnail: "/construction-industry-client-testimonial.png",
  },
  {
    id: 4,
    videoUrl:
      "https://res.cloudinary.com/doy1iucnw/video/upload/v1756105425/segment_video_2_33_1_nafrxk.mp4",
    thumbnail: "/construction-industry-client-testimonial.png",
  },
];

export function VideoTestimonialsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Client <span className="text-orange-500">Videos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group overflow-hidden bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[9/16]">
                <video
                  src={testimonial.videoUrl}
                  className="w-full h-full rounded-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
