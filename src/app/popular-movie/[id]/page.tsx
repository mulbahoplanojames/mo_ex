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

export const generateStaticParams = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results.map((movie: MoviesType) => ({
    id: movie.id.toString(),
  }));
};

const handleFetchPopularMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const data = await res.json();
  return data;
};

const PopularMovie = async ({ params }: { params: { id: string } }) => {
  const movie = await handleFetchPopularMovie(params.id);

  console.log(movie);

  return (
    <>
      <section className="mt-28 px-20">
        <h1>{movie.title}</h1>
        <p>{params.id}</p>
      </section>
    </>
  );
};

export default PopularMovie;
