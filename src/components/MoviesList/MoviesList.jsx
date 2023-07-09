import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ moviesTrending, moviesSearch }) => {
    const location = useLocation();

    return (
        <ul>
            {moviesTrending ? 
            (moviesTrending.map(({ id, poster_path, original_language, title, release_date, original_title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="200" />
                        <h2>{original_title}</h2>
                        <p>Original language: {original_language}</p>
                        <p>Release date: {release_date}</p>
                    </Link>
                </li>
            ))) : (moviesSearch.map(({ id, poster_path, original_language, title, release_date, original_title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="200" />
                        <h2>{original_title}</h2>
                        <p>Original language: {original_language}</p>
                        <p>Release date: {release_date}</p>
                    </Link>
                </li>
            )))}
        </ul>
    );
};

export default MoviesList;