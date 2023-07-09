import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState,  useRef, useEffect } from "react";
import GoBackLink from "components/GoBackLink";
import { fetchMovieDetails } from "Services/Services";
import DetailsNav from "components/DetailsNav";
import { Suspense } from "react";
import Loader from "components/Loader";
import MovieInfo from "pages/MovieInfo";


const MovieDetails = () => {
    const [moviesDetails, setMoviesDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortController = useRef();
    const { movieId } = useParams();

    const location = useLocation();
    const goBackLink = useRef(location?.state?.from ?? '/');

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                if (abortController.current) {
                    abortController.current.abort();
                }
            
                abortController.current = new AbortController();

                setLoading(true);
                setError(null);

                const movieInfo = await fetchMovieDetails(movieId, abortController.current.signal);

                setMoviesDetails(movieInfo);
                console.log(movieInfo);
                setError(null);

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError("Sorry, an error occurred :( Try reloading the page!");
                    setLoading(false);
                }
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [movieId]);

    const { 
        title,
        release_date,
        overview,
        genres,
        poster_path,
        original_title,
        vote_average
    } = moviesDetails || {};
    
    return (
        <div>
            <GoBackLink to={goBackLink.current}/>
            {!loading && moviesDetails && title && release_date && overview && genres && poster_path && original_title && vote_average && (<MovieInfo
                title={title}
                release={release_date}
                overview={overview}
                genres={genres}
                src={poster_path}
                originalTitle={original_title}
                rating={vote_average}
            />)}

            <DetailsNav />
            {error && <div>{error}</div> }
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;