import { useLocation } from "react-router-dom";

const MoviesList = ({movies}) => {
    const location = useLocation();

    const cardURL = (id) => {
        if(location.pathname === '/movies'){
            return `${id}`;
        }
        return `movies/${id}`;
    }

    return (
        <ul>
            {movies.map(({id, poster_path, original_language, title, release_date, original_title }) => (
                <li key={id}>
                    <a href={cardURL(id)} to={cardURL(id)} state={{ from: location}}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="200" />
                        <h2>{original_title}</h2>
                        <p>Original language: {original_language}</p>
                        <p>Release date: {release_date}</p>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MoviesList;