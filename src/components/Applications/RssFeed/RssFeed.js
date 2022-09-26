import { useEffect, useState } from "react";
import "./rssFeed.css";

const RssFeed = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const getFeedData = () => {
            fetch("https://jsonplaceholder.typicode.com/comments", { method: "GET" })
                .then(data => data.json())
                .then(data => setFeed(data));
        };

        getFeedData();
    }, []);

    return (
        <div className="rssFeed-main">
            {feed.map((item, index) =>
                <div key={index} className="rssFeed-card">
                    <h1 className="rssFeed-title">{item.name}</h1>
                    <p className="rssFeed-body">{item.body}</p>
                </div>
            )}
        </div>
    )
};

export default RssFeed;