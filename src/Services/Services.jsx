import axios from "axios";

const KEY = '46ee399c81006beac7a91a0ab15f7750';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async (signal) => {
    const response = await axios.get('trending/all/day', {
        signal,
        params: {
            api_key: KEY,
            time_window: 'week'
        }
    })
    console.log(response.data.results)
    
    return response.data.results;
};

