import Loader from "components/Loader";
import MoviesList from "components/MoviesList";
import { useState, useEffect, useRef } from "react";
import { fetchTrendingMovies } from "Services/Services";
import { TitleHome } from "./Home.styled";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortController = useRef();

  useEffect(() => {
    const getTrendingWeekMovies = async () => {
      try {
        if (abortController.current) {
          abortController.current.abort();
        }

        abortController.current = new AbortController();

        setLoading(true);
        setError(null);

        const movies = await fetchTrendingMovies(abortController.current.signal);

        setMoviesList(movies);
        setLoading(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError("Sorry, an error occurred :( Try reloading the page!");
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    };

    getTrendingWeekMovies();
  }, []);

  return (
    <>
      <TitleHome>This day's movie trends</TitleHome>
      {loading && <Loader />}
      {!loading && moviesList.length > 0 ? (
        <MoviesList movies={moviesList} />
      ) : (
        !loading && <div>No movies found</div>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default Home;