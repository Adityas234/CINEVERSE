'use client';

import Link from 'next/link';

import { useRequireAuth } from '@/lib/auth';

import MovieCard from '@/components/ui/movie-card';

import {
  Film,
  Clock,
  Heart,
  Star,
  PlayCircle,
  Sparkles,
} from 'lucide-react';

import {
  continueWatching,
  myList,
  watchHistory,
  recommended,
  dashboardStats,
} from '@/lib/mock-data';

export default function DashboardPage() {
  const { user, loading } = useRequireAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#09090b] text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#09090b] text-white">
        Redirecting...
      </div>
    );
  }

  const memberSince = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
      })
    : 'Unknown';

  const stats = [
    {
      label: 'Movies',
      value: dashboardStats.moviesWatched,
      icon: Film,
    },

    {
      label: 'Hours',
      value: dashboardStats.hoursWatched,
      icon: Clock,
    },

    {
      label: 'My List',
      value: dashboardStats.listCount,
      icon: Heart,
    },

    {
      label: 'Rating',
      value: dashboardStats.avgRating,
      icon: Star,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B]">

      {/* Ambient Lights */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10">

        {/* HERO */}

        <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-2 text-pink-400">

                <Sparkles className="h-4 w-4"/>

                <span className="text-sm font-medium">

                  CineVerse Premium

                </span>

              </div>

              <h1 className="mt-4 text-5xl font-bold text-white">

                Welcome back,

              </h1>

              <h2 className="mt-2 text-4xl font-semibold text-white">

                {user.displayName ||

                user.email?.split('@')[0] ||

                'User'}

              </h2>

              <p className="mt-4 text-gray-400">

                {user.email}

              </p>

              <p className="mt-1 text-gray-500">

                Member since {memberSince}

              </p>

            </div>

            <Link
              href="/browse"
              className="
              rounded-full

              border

              border-white/10

              bg-white/5

              px-6

              py-4

              font-medium

              text-white

              transition-all

              duration-300

              hover:bg-white/10
              "
            >

              Browse Library

            </Link>

          </div>
        </div>

        {/* STATS */}

        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map(({ label, value, icon: Icon }) => (

            <div
              key={label}
              className="
              rounded-3xl

              border

              border-white/10

              bg-white/[0.04]

              p-6

              backdrop-blur-3xl

              transition-all

              duration-500

              hover:-translate-y-2
              "
            >

              <div className="flex flex-col items-center">

                <div
                  className="
                  mb-4

                  flex

                  h-16

                  w-16

                  items-center

                  justify-center

                  rounded-full

                  bg-gradient-to-br

                  from-pink-500/20

                  to-violet-500/20
                  "
                >

                  <Icon className="h-8 w-8 text-pink-400" />

                </div>

                <p className="text-4xl font-bold text-white">

                  {value}

                </p>

                <p className="mt-2 text-gray-400">

                  {label}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* CONTINUE WATCHING */}

        <section className="mt-14">

          <h2 className="mb-6 text-3xl font-bold text-white">

            Continue Watching

          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            {continueWatching.slice(0, 2).map(
              ({ movie, remaining, progress }) => (

                <Link
                  href={`/movie/${movie.id}`}
                  key={movie.id}
                  className="
                  group

                  relative

                  h-[380px]

                  overflow-hidden

                  rounded-[36px]

                  border

                  border-white/10
                  "
                >

                  <img
                    src={movie.backdropUrl}
                    alt={movie.title}
                    className="
                    absolute

                    inset-0

                    h-full

                    w-full

                    object-cover

                    transition-all

                    duration-700

                    group-hover:scale-110
                    "
                  />

                  <div
                    className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-black

                    via-black/40

                    to-transparent
                    "
                  />

                  <div className="absolute bottom-0 w-full p-8">

                    <h3 className="text-4xl font-bold text-white">

                      {movie.title}

                    </h3>

                    <p className="mt-3 text-gray-300">

                      {remaining}

                    </p>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">

                      <div
                        className="h-full rounded-full bg-pink-500"
                        style={{
                          width: `${Math.round(progress * 100)}%`,
                        }}
                      />
                    </div>

                    <button
                      className="
                      mt-6

                      flex

                      items-center

                      gap-3

                      rounded-full

                      bg-white/10

                      px-5

                      py-3

                      text-white

                      backdrop-blur-xl

                      hover:bg-white/20
                      "
                    >

                      <PlayCircle />

                      Continue

                    </button>

                  </div>

                </Link>

              )
            )}

          </div>

        </section>

        {/* MY LIST */}

        <section className="mt-16">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-3xl font-bold text-white">

              My List

            </h2>

            <Link
              href="/browse"
              className="text-pink-400 hover:text-pink-300"
            >

              View All

            </Link>

          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

            {myList.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={{
                  id: movie.id,
                  title: movie.title,
                  posterUrl: movie.posterUrl,
                  trailerUrl: movie.trailerUrl,
                  rating: movie.rating,
                  year: movie.releaseYear,
                }}
              />

            ))}

          </div>

        </section>

        {/* RECOMMENDED */}

        <section className="mt-16">

          <h2 className="mb-6 text-3xl font-bold text-white">

            Recommended For You

          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

            {recommended.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={{
                  id: movie.id,
                  title: movie.title,
                  posterUrl: movie.posterUrl,
                  trailerUrl: movie.trailerUrl,
                  rating: movie.rating,
                  year: movie.releaseYear,
                }}
              />

            ))}

          </div>

        </section>

        {/* WATCH HISTORY */}

        <section className="mt-16">

          <h2 className="mb-6 text-3xl font-bold text-white">

            Recently Watched

          </h2>

          <div className="space-y-4">

            {watchHistory.map(({ movie, watchedOn }) => (

              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="
                flex

                items-center

                gap-5

                rounded-3xl

                border

                border-white/10

                bg-white/[0.04]

                p-5

                backdrop-blur-3xl

                transition-all

                duration-300

                hover:bg-white/[0.08]
                "
              >

                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="h-24 w-16 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-white">

                    {movie.title}

                  </h3>

                  <p className="text-gray-400">

                    {movie.releaseYear}

                  </p>

                </div>

                <div className="text-gray-400">

                  {watchedOn}

                </div>

              </Link>

            ))}

          </div>

        </section>

      </div>
    </div>
  );
}