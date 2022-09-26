import "./saveModal.css"
import FileContext from "../../../../context/FileProvider";
import { useContext, useEffect, useRef, useState } from 'react';

const SaveModal = ({ text, setText, setShowModal }) => {
    const { saveFile } = useContext(FileContext);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fileName.length === 0) {
            setError("Please enter a title");
            return;
        } else {
            saveFile(fileName, text);
            setFileName("");
            setError("");
            setText("");
            setShowModal(false);
        }
    };

    const handleChange = (e) => {
        setError(false);
        setFileName(e.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="notepad-modal">
            <div className="notepad-modal-title">Save As</div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} className="notepad-modal-input" type="text" placeholder="Type name of file..." onChange={handleChange} value={fileName} />
                <div className="notepad-modal-error">{error}</div>
                <div className="notepad-modal-buttons">
                    <button type="submit" className="notepad-save-button">Save</button>
                    <button className="notepad-cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default SaveModal;