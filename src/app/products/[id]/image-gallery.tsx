"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  gallery: string[];
  title: string;
}

export function ImageGallery({ gallery, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={gallery[selectedImage] || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {gallery.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square relative overflow-hidden rounded-lg border-2 ${
              selectedImage === index ? "border-orange-500" : "border-gray-200"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
