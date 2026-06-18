'use client';

import Link from 'next/link';
import { PlayCircle, Info } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative flex min-h-[70vh] items-center">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded bg-pink-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400">
            Featured
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">Welcome to CineVerse</h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Stream thousands of movies and TV shows. From blockbuster hits to indie gems,
            discover your next favorite — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="flex items-center rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Watching
            </Link>
            <Link
              href="/browse"
              className="flex items-center rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-gray-400 hover:text-white"
            >
              <Info className="mr-2 h-5 w-5" />
              Browse Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
