import { useRef, useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import { toast, ToastContainer } from 'react-toastify';
import { fetchMovies } from "Services/Services";
import Loader from "components/Loader";
import MoviesList from "components/MoviesList";
import { useSearchParams } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nameMovie, setNameMovie] = useState('');
    const [error, setError] = useState(null);
    const abortController = useRef();
    const [searchParams] = useSearchParams();
    const nameMovies = searchParams.get('queryMovie') || '';

    useEffect(() => {
        if (nameMovies === '') {
            return;
        }

        const getMovieList = async () => {
            try {
                if (abortController.current) {
                    abortController.current.abort();
                }
        
                abortController.current = new AbortController();
        
                setLoading(true);
                setError(false);
        
                const movieList = await fetchMovies({ nameMovies, signal: abortController.current.signal });
                if (movieList.length === 0) {
                    toast.info('Sorry, no movies were found for your request :(');
                }
        
                setMovies(movieList);
                setError(null);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError('Sorry, an error occurred :( Try reloading the page!');
                    setLoading(false);
                }
            } finally {
                setLoading(false);
            }
        };
        

        getMovieList();
    }, [nameMovie, nameMovies])

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
            {!loading && movies.length > 0 && <MoviesList moviesSearch={movies} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default Movies;