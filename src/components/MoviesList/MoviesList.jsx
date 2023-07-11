import { Link, useLocation } from "react-router-dom";
import { ContainerDescription, Data, GalleryMovies, Language, MovieItem, OriginalTitle } from "./MoviesList.styled";
import placeholderImage from "../../imgPlaceholder/imgPlaceholder.png";

const MoviesList = ({ movies }) => {
    const location = useLocation();
  
    return (
      <GalleryMovies>
        {movies.map(({ id, poster_path, original_language, title, release_date, original_title }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img 
              src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholderImage} 
              alt={title} 
              width="220"
              />
            <ContainerDescription>
              <OriginalTitle>{original_title}</OriginalTitle>
              <Language>Original language: {original_language}</Language>
              <Data>Release date: {release_date}</Data>
            </ContainerDescription>
            </Link>
          </MovieItem>
        ))}
      </GalleryMovies>
    );
  };
  

export default MoviesList;