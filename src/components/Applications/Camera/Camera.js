import { useEffect, useRef } from "react";
import "./camera.css";

const Camera = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const getStream = () => {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    videoRef.current.srcObject = stream;
                })
                .catch(function (error) {
                    alert(error);
                });
        };

        getStream();
    }, []);

    return (
        <div className="camera-main">
            <video ref={videoRef} autoPlay={true} className="camera-stream">Your browser does not support video.</video>
        </div>
    )
};

export default Camera;