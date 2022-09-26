import { useEffect, useRef, useState } from "react";
import "./browser.css";

const Browser = () => {
    const [url, setUrl] = useState("");
    const [finalUrl, setFinalUrl] = useState("https://www.bing.com/");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkUrl = /^http(s{0,1}):\/\/(.*)$/;
        checkUrl.test(url) ? setFinalUrl(url) : setFinalUrl(`https://www.bing.com/search?q=${url}`);
    }

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <div className="browser-main">
            <form className="browser-form" onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder="Enter url or search..." onChange={(e) => setUrl(e.target.value)} />
                <button>Go</button>
            </form>
            <iframe src={finalUrl} title="Browser" frameBorder="0" />
        </div>
    )
};

export default Browser;