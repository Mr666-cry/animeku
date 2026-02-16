"use client";

import Link from "next/link";

export default function AnimeCard({ anime }) {
  return (
    <Link
      href={`/detail/${anime.slug}`}
      className="group block"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        
        {/* Gambar */}
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-64 object-cover"
        />

        {/* Overlay episode */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm">
          Eps {anime.episode}
        </div>

        {/* Label TV */}
        <div className="absolute top-3 right-3 bg-pink-600 px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md">
          TV
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-3 text-white text-lg font-semibold text-center group-hover:text-pink-400 transition-colors duration-300">
        {anime.title}
      </h2>
    </Link>
  );
}
