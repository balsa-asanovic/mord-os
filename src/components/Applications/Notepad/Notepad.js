import "./notepad.css"
import SaveModal from "./SaveModal/SaveModal";
import { useState } from 'react';

const Notepad = ({ textContent, fileName }) => {
    const [fileTitle, setFileTitle] = useState(fileName || "");
    const [text, setText] = useState(textContent || "");
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="notepad-main">
            <button className="notepad-button" onClick={(e) => setShowModal(true)}>Save</button>
            <textarea className="notepad-textarea" placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text} />
            {showModal && <SaveModal text={text} setText={setText} fileTitle={fileTitle} setFileTitle={setFileTitle} setShowModal={setShowModal} />}
        </div>
    )
};

export default Notepad;