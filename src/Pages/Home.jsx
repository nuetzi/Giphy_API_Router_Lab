import { useState, useEffect } from "react";
import { getRandom } from "../services/getAPIRequests";

export default function Home () {
    const [randomGif, setRandomGif] = useState([]);

    useEffect(() => {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url
            ))
    },[]);

    // console.log(randomGif);

    return (
        <div>
            <img src={randomGif} className="displayGif"/> <br/>
            <br/>
            <button 
                onClick = {() => {
                    getRandom()
                    .then(res => setRandomGif(res.data.data.images.downsized_large.url
                    ))
                }}
            >
                Generate New GIF
            </button>
        </div>
    );
};