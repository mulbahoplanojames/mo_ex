import Link from "next/link";

interface MoviesType {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  id: number;
  backdrop_path: string;
  vote_average: number;
  popularity: number;
}

const handleFetchTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

const TopRatedMovies = async () => {
  const topRatedMoviesData = await handleFetchTopRatedMovies();

  //   console.log(pupularMoviesData);

  return (
    <>
      <section className="px-8 py-20 ">
        <h1 className="text-4xl font-bold pb-5">Top Rated Movies</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8">
          {topRatedMoviesData.length > 0 &&
            topRatedMoviesData.map((movie: MoviesType) => (
              <Link
                href={`/top-rated-movie/${movie.id}`}
                className="w-full py-3 px-2 rounded-md shadow-md bg-white"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="w-full h-[200px] mb-4"
                />
                <p className="text-lg text-black ">{movie.title}</p>
                <p className="text-sm text-gray-500">{movie.release_date}</p>
                <p className="text-sm text-gray-500">{movie.popularity}</p>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedMovies;
