import { useEffect, useState } from "react";
import "./gallery.css"

const Gallery = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const getPictures = () => {
            fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50", { method: "GET" })
                .then(data => data.json())
                .then(data => setPictures(data));
        };

        getPictures();
    }, []);

    return (
        <div className="gallery-main">
            {pictures.map((picture, index) => 
                <div key={index} className="gallery-card">
                    <img src={picture.url} alt={picture.title} onClick={() => window.open(picture.url, '_blank').focus()} />
                    <div className="gallery-pic-title">{picture.title}</div>
                </div>
            )}
        </div>
    )
};

export default Gallery;