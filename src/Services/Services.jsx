import axios from "axios";

const KEY = '46ee399c81006beac7a91a0ab15f7750';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async (signal) => {
    const response = await axios.get('trending/movie/day', {
        signal,
        params: {
            api_key: KEY,
            language: 'en-US'
        }
    });
    
    return response.data.results;
};

export const fetchMovies = async ({ nameMovies, signal }) => {
    const response = await axios.get('search/movie', {
        signal,
        params: {
            api_key: KEY,
            query: nameMovies,
        }
    });

    return response.data.results;
}

export const fetchMovieDetails = async ({ movieId, signal }) => {
    const response = await axios.get(`movie/${movieId}`, {
        signal,
        params: { 
            api_key: KEY,
            language: 'en-US' 
        }
    })

    return response.data;
}

export const fetchCast = async ({ movieId, signal }) => {
    const response = await axios.get(`movie/${movieId}/credits`, {
        signal,
        params: {
            api_key: KEY,
            language: 'en-US'
        }
    })

    return response.data.cast;
}

export const fetchReviews = async ({ movieId, signal }) => {
    const response = await axios.get(`movie/${movieId}/reviews`, {
        signal,
        params: {
            api_key: KEY,
            language: 'en-US' 
        }
    });

    return response.data.results;
}