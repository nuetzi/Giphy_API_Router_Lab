import axios from "axios";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const RANDOM_URL = "https://api.giphy.com/v1/gifs/random?api_key=" + REACT_APP_API_KEY;
const TRENDING_URL = "https://api.giphy.com/v1/gifs/trending?api_key=" + REACT_APP_API_KEY;

export function getRandom () {
    const response = axios.get(RANDOM_URL);
    return response;    
};

export function getTrending () {
    const response = axios.get(TRENDING_URL);
    return response;
};