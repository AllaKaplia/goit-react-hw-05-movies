import { useRef, useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import { toast, ToastContainer } from 'react-toastify';
import { fetchMovies } from "Services/Services";
import Loader from "components/Loader";
import MoviesList from "components/MoviesList";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nameMovie, setNameMovie] = useState('');
    const [error, setError] = useState(null);
    const abortController = useRef();

    useEffect(() => {
        if (nameMovie === '') {
            return;
        }

        const getMovieList = () => {
            try {
                if(abortController.current) {
                    abortController.current.abort();
                }

                abortController.current = new AbortController();

                setLoading(true);
                setError(false);

                const movieList = fetchMovies(nameMovie, abortController.current.signal);
                if(movieList.length === 0){
                    toast.info('Sorry, no movies were found for your request :(');
                }

                setMovies(movieList);
                setError(null);
            } catch (error) {
                if(error.name !== "AbortError"){
                    setError("Sorry, an error occurred :( Try reloading the page!");
                    setLoading(false);
                }
            } finally {
                setLoading(false);
            }

        };

        getMovieList();
    }, [nameMovie])

    const onNameMovieChange = (query) => {
        if(query === nameMovie) {
            return;
        }

        setNameMovie(query);
        setError(null);
    }

    return (
        <div>
            <ToastContainer autoClose={3000} theme="colored" />
            <SearchBox onChange={onNameMovieChange} />
            {loading && <Loader />}
            {!loading && movies.length > 0 && <MoviesList movies={movies} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default Movies;