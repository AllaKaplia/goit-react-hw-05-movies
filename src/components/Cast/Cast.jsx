import Loader from "components/Loader";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "Services/Services";


const Cast = () => {
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const abortController = useRef();

    useEffect(() => {
        const getCastDetails = async () => {
            try {
                if(abortController.current){
                    abortController.current.abort();
                }

                abortController.current = new AbortController();

                setLoading(true);
                setError(null);

                const castDetails = await fetchCast({
                    movieId: movieId,
                    signal: abortController.current.signal
                });

                setCast(castDetails);
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
        getCastDetails();
    }, [movieId]);



    return (
        <div>
            {loading && <Loader />}
            {cast && <ul>
                        {cast.map(({ id, name, character, original_name, profile_path, popularity }) => (
                            <li key={id}>
                                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width={150}/>
                                <h3>{original_name}</h3>
                                <h4>Played the role of a character: {character}</h4>
                                <p>Actor's popularity statistics: {popularity}</p>
                            </li>
                        ))}
                    </ul>}
            {error && <div>{error.message}</div> }
        </div>
    )
}

export default Cast;