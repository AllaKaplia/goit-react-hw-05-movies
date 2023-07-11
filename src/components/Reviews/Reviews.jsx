import Loader from "components/Loader";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchReviews } from "Services/Services";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const abortController = useRef();
    
    useEffect(() => {
        const getReviewsDetails = async () => {
            try {
                if(abortController.current){
                    abortController.current.abort();
                }

                abortController.current = new AbortController();

                setLoading(true);
                setError(null);

                const reviewsDetails = await fetchReviews({
                    movieId: movieId,
                    signal: abortController.current.signal
                });

                if (reviewsDetails.length === 0) {
                    return toast.success('Sorry, there are no reviews for this movie yet.');
                }
                  
                setReviews(reviewsDetails);
                setError(null);
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError("Sorry, an error occurred :( Try reloading the page!");
                    setLoading(false);
                }
            } finally{
                setLoading(false);
            }
        };

        getReviewsDetails()
    }, [movieId]);

    return (
        <div>
          {loading && <Loader />}
          {!loading && reviews.length > 0 && (
            <div>
              <ul>
                {reviews.map(({ id, author, content }) => (
                  <li key={id}>
                    <h3>Author: {author}</h3>
                    <p>Description: {content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!loading && reviews.length === 0 && toast.info('Sorry, there are no reviews for this movie yet.')}
          {error && <div>{error.message}</div>}
        </div>
    );
      
}

export default Reviews;