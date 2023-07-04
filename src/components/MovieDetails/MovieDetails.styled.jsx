import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const movieId = useParams();
    return <div>Page with detailed information about the movie id - {movieId}</div>
}

export default MovieDetails;