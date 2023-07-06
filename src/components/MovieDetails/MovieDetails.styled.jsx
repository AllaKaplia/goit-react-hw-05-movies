import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();

    return(
    <main>
        <div>Page with detailed information about the movie id - {movieId}</div>
        <ul>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </ul>
        <Outlet />
    </main>
    ) 
}

export default MovieDetails;