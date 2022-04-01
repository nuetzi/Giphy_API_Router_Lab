import axios from "axios";
const BASE_URL = "https://api.giphy.com/v1/gifs/"
const API_KEY = "api_key=" + process.env.REACT_APP_API_KEY;
const RANDOM_URL = BASE_URL + "random?" + API_KEY;
const TRENDING_URL = BASE_URL + "trending?" + API_KEY;

export function getRandom () {
    const response = axios.get(RANDOM_URL);
    return response;    
};

export function getTrending () {
    const response = axios.get(TRENDING_URL);
    return response;
};