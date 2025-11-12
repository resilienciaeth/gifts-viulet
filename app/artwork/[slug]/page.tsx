"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { artworks } from "@/app/data/artworks";
import { ArrowLeft } from "lucide-react";

export default function ArtworkPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the artwork by slug
  const artwork = artworks.find((art) => art.slug === slug);

  // If artwork not found, show error
  if (!artwork) {
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Artwork Not Found</h1>
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </main>
    );
  }

  const handleWallpaperDownload = () => {
    if (!artwork.wallpaperLink) {
      alert("Wallpaper will be available soon!");
      return;
    }
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = artwork.wallpaperLink;
    link.download = artwork.wallpaperLink.split('/').pop() || 'wallpaper.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMirrorClick = () => {
    if (!artwork.mirrorLink) {
      alert("Mirror link will be added soon!");
      return;
    }
    window.open(artwork.mirrorLink, "_blank");
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-black">
      {/* Back Button */}
      <div className="w-full max-w-4xl px-4 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
        </Link>
      </div>

      {/* Artwork Title */}
      <div className="w-full max-w-4xl px-4 pt-8 pb-6">
        <h1 className="text-4xl font-bold text-white text-center">{artwork.title}</h1>
      </div>

      {/* Main Artwork Image */}
      <div className="w-full max-w-4xl px-4 pb-8">
        <div className="relative w-full aspect-square overflow-hidden border border-gray-700 shadow-2xl">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-4xl px-4 pb-12">
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleWallpaperDownload}
            className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors shadow-lg"
          >
            Get Wallpaper
          </button>
          <button
            onClick={handleMirrorClick}
            className="px-8 py-4 bg-transparent text-white font-medium border border-white hover:bg-white hover:text-black transition-colors shadow-lg"
          >
            Get Mirror
          </button>
        </div>
        {artwork.soldOut && (
          <p className="text-center text-red-600 mt-4 uppercase tracking-wider font-medium">
            Mirror Sold Out
          </p>
        )}
      </div>

      {/* Mirror's Whisper Section */}
      <div className="w-full max-w-4xl px-4 pb-16">
        <div className="bg-gray-900 border border-gray-700 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Mirror&apos;s Whisper
          </h2>
          {artwork.mirrorsWhisper ? (
            <p className="text-gray-300 text-lg leading-relaxed text-center whitespace-pre-line">
              {artwork.mirrorsWhisper}
            </p>
          ) : (
            <p className="text-gray-500 italic text-center">
              The mirror&apos;s whisper will be revealed soon...
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

