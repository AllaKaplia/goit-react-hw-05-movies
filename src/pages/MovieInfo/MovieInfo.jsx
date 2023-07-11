import { GenresItem, GenresList, NameMovie, Overview, PosterBox, Rating, Release, TextReview } from "pages/MovieInfo/MovieInfo.styled";
import placeholderImage from "../../imgPlaceholder/imgPlaceholder.png";

const MovieInfo = ({ title, release, overview, genres, src, originalTitle, rating }) => {
    return (
        <div>
            <PosterBox>
                <img src={src ? `https://image.tmdb.org/t/p/w500${src}` : placeholderImage} alt={originalTitle} width={300} />
                <div>
                    <NameMovie>{title}</NameMovie>
                    <Release>Release date: {release}</Release>
                    <Rating>User rating: {Math.floor(rating * 10)}%</Rating>
                    <Release>Genres</Release>
                    <GenresList>
                        {genres.map(genre => 
                            <GenresItem key={genre.id}>{genre.name}</GenresItem>
                        )}
                    </GenresList>
                </div>
            </PosterBox>
            <div>
                <Overview>Overview</Overview>
                <TextReview>{overview}</TextReview>
            </div>
        </div>
    )
}

export default MovieInfo;