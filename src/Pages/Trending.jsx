import { useState, useEffect } from "react";
import { getTrending } from "../services/getAPIRequests";

export default function Trending () {
    const [trendingGif, setTrendingGif] = useState([]);

    useEffect(() => {
        getTrending()
            .then(res => setTrendingGif(res.data.data))
    }, []);
    
    return (
        <div className="container">
            <ol>
            {
                trendingGif.map((each, i) => {
                    return (
                        <li> <img src={each.images.downsized_large.url} key={i} className="displayGif" /> </li>
                    )
                })
            }
            </ol>
        </div>
    );
};