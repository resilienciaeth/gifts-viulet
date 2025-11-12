"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { artworks } from "./data/artworks";

const CollectionCard = ({ title, slug, image, soldOut }: { title: string; slug: string; image: string; soldOut: boolean }) => {
  return (
    <Link
      href={`/artwork/${slug}`}
      className="flex items-center bg-black overflow-hidden shadow-md transition-shadow duration-300 border border-gray-700 relative hover:shadow-xl max-h-32"
    >
      <div className="w-32 h-32 relative flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-3 flex-1">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-xs text-gray-400 mt-1">Get Wallpaper</p>
        {soldOut && (
          <p className="text-xs text-red-600 mt-1 uppercase tracking-wider font-medium">Sold Out</p>
        )}
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-black">
      {/* Hero Image with Gradient Blend */}
      <div className="w-full relative">
        <div className="relative w-full h-[40vh] overflow-hidden">
          <Image
            src="/images/benjamin.jpg"
            alt="Benjamin Viulet"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient overlay to blend into black */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>
      </div>

      {/* Title and Subtitle */}
      <div className="w-full max-w-2xl px-4 -mt-20 pb-12 text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">Benjamin Viulet</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to my world, where whispers become visions. Here are some gifts to begin your seeker&apos;s journey—may they light the path inward.
        </p>
      </div>

      {/* Collection Cards */}
      <div className="w-full max-w-2xl px-4 pb-16 space-y-4">
        {artworks.map((artwork) => (
          <CollectionCard 
            key={artwork.id} 
            title={artwork.title}
            slug={artwork.slug}
            image={artwork.image}
            soldOut={artwork.soldOut}
          />
        ))}
      </div>
    </main>
  );
}
