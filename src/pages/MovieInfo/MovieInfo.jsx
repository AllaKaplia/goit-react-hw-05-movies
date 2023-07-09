

const MovieInfo = ({ title, release, overview, genres, src, originalTitle, rating }) => {
    return (
        <div>
            <img src={src} alt={originalTitle} />
            <div>
                <h1>{title} {release}</h1>
                <p>User rating: {Math.floor(rating * 10)}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                    {genres.map(genre => 
                        <li key={genre.id}>{genre.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MovieInfo;