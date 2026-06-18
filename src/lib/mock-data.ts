// Centralized mock data for CineVerse.
// Used in place of Firestore so the whole app works as a self-contained demo.

export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  genre: string[];
  releaseYear: number;
  rating: number;
  duration: string;
  cast: string[];
  director: string;
  views: number;
}

const img = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;
const backdrop = (path: string) => `https://image.tmdb.org/t/p/original${path}`;

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: img('/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'),
    backdropUrl: backdrop('/s3TBrRGB1iav7gFOCNx3H31MoES.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    releaseYear: 2010,
    rating: 8.8,
    duration: '2h 28m',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
    director: 'Christopher Nolan',
    views: 2890000,
  },
  {
    id: '2',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterUrl: img('/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'),
    backdropUrl: backdrop('/xJHokMbljvjADYdit5fK5VQsXEG.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    releaseYear: 2014,
    rating: 8.6,
    duration: '2h 49m',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    director: 'Christopher Nolan',
    views: 2450000,
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: img('/qJ2tW6WMUDux911r6m7haRef0WH.jpg'),
    backdropUrl: backdrop('/dqK9Hag1054tghRQSqLSfrkvQnA.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    genre: ['Action', 'Crime', 'Drama'],
    releaseYear: 2008,
    rating: 9.0,
    duration: '2h 32m',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    director: 'Christopher Nolan',
    views: 3120000,
  },
  {
    id: '4',
    title: 'Dune: Part Two',
    description:
      'Paul Atreides unites with the Fremen while on a path of revenge against the conspirators who destroyed his family.',
    posterUrl: img('/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'),
    backdropUrl: backdrop('/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    genre: ['Sci-Fi', 'Adventure'],
    releaseYear: 2024,
    rating: 8.5,
    duration: '2h 46m',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem'],
    director: 'Denis Villeneuve',
    views: 1980000,
  },
  {
    id: '5',
    title: 'Oppenheimer',
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    posterUrl: img('/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'),
    backdropUrl: backdrop('/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    genre: ['Drama', 'History'],
    releaseYear: 2023,
    rating: 8.4,
    duration: '3h 0m',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    director: 'Christopher Nolan',
    views: 1760000,
  },
  {
    id: '6',
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterUrl: img('/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'),
    backdropUrl: backdrop('/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama', 'Crime'],
    releaseYear: 1994,
    rating: 9.3,
    duration: '2h 22m',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler'],
    director: 'Frank Darabont',
    views: 2670000,
  },
  {
    id: '7',
    title: 'Parasite',
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: img('/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'),
    backdropUrl: backdrop('/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/5xH0HfJHsaY',
    genre: ['Comedy', 'Drama', 'Thriller'],
    releaseYear: 2019,
    rating: 8.5,
    duration: '2h 12m',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong', 'Choi Woo-shik'],
    director: 'Bong Joon-ho',
    views: 1540000,
  },
  {
    id: '8',
    title: 'The Matrix',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    posterUrl: img('/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'),
    backdropUrl: backdrop('/icmmSD4vTTDKOq2vvdulafOGw93.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    genre: ['Action', 'Sci-Fi'],
    releaseYear: 1999,
    rating: 8.7,
    duration: '2h 16m',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
    director: 'The Wachowskis',
    views: 2210000,
  },
  {
    id: '9',
    title: 'Gladiator',
    description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    posterUrl: img('/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg'),
    backdropUrl: backdrop('/hND7xAaxxBgaIspp9iMjwQjVcfV.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/owK1qxDselE',
    genre: ['Action', 'Drama', 'Adventure'],
    releaseYear: 2000,
    rating: 8.5,
    duration: '2h 35m',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Oliver Reed'],
    director: 'Ridley Scott',
    views: 1320000,
  },
  {
    id: '10',
    title: 'Spirited Away',
    description:
      'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.',
    posterUrl: img('/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'),
    backdropUrl: backdrop('/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    genre: ['Animation', 'Family', 'Adventure'],
    releaseYear: 2001,
    rating: 8.6,
    duration: '2h 5m',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Takashi Naito'],
    director: 'Hayao Miyazaki',
    views: 1180000,
  },
  {
    id: '11',
    title: 'Pulp Fiction',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    posterUrl: img('/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'),
    backdropUrl: backdrop('/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    genre: ['Crime', 'Drama', 'Thriller'],
    releaseYear: 1994,
    rating: 8.9,
    duration: '2h 34m',
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis'],
    director: 'Quentin Tarantino',
    views: 1620000,
  },
  {
    id: '12',
    title: 'Avengers: Endgame',
    description:
      'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.',
    posterUrl: img('/or06FN3Dka5tukK1e9sl16pB3iy.jpg'),
    backdropUrl: backdrop('/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2019,
    rating: 8.4,
    duration: '3h 1m',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson'],
    director: 'Anthony & Joe Russo',
    views: 3010000,
  },
];

export function getMockMovieById(id: string): Movie | undefined {
  return mockMovies.find((m) => m.id === id);
}

// ---- Dashboard mock data ----

export interface ContinueWatchingItem {
  movie: Movie;
  progress: number; // 0..1
  remaining: string;
}

export const continueWatching: ContinueWatchingItem[] = [
  { movie: mockMovies[0], progress: 0.62, remaining: '56m left' },
  { movie: mockMovies[3], progress: 0.28, remaining: '1h 59m left' },
  { movie: mockMovies[7], progress: 0.85, remaining: '20m left' },
  { movie: mockMovies[4], progress: 0.1, remaining: '2h 42m left' },
];

export const myList: Movie[] = [
  mockMovies[1],
  mockMovies[2],
  mockMovies[5],
  mockMovies[9],
  mockMovies[10],
];

export interface WatchHistoryItem {
  movie: Movie;
  watchedOn: string;
}

export const watchHistory: WatchHistoryItem[] = [
  { movie: mockMovies[2], watchedOn: 'Jun 16, 2026' },
  { movie: mockMovies[7], watchedOn: 'Jun 14, 2026' },
  { movie: mockMovies[6], watchedOn: 'Jun 11, 2026' },
  { movie: mockMovies[11], watchedOn: 'Jun 8, 2026' },
];

export const recommended: Movie[] = [
  mockMovies[3],
  mockMovies[4],
  mockMovies[6],
  mockMovies[8],
  mockMovies[11],
];

export const dashboardStats = {
  moviesWatched: 47,
  hoursWatched: 118,
  listCount: myList.length,
  avgRating: 8.7,
};
