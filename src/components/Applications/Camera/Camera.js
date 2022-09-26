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
                    console.log(error);
                });
        };

        getStream();
    });

    return (
        <div className="camera-main">
            <video ref={videoRef} autoPlay={true} />
        </div>
    )
};

export default Camera;