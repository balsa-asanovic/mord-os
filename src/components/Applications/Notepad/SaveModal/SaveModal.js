import "./saveModal.css"
import FileContext from "../../../../context/FileProvider";
import { useContext, useEffect, useRef, useState } from 'react';

const SaveModal = ({ text, setText, setShowModal, fileTitle, setFileTitle }) => {
    const { files, saveFile } = useContext(FileContext);
    const [fileName, setFileName] = useState(fileTitle || "");
    const [error, setError] = useState("");
    const inputRef = useRef(null);
    const [showOverwrite, setShowOverWrite] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fileName.length === 0) {
            setError("Please enter a title");
            return;
        } else {
            if (files.filter((file) => file.fileName === fileName).length > 0) {
                // file exist, check overwrite
                setShowOverWrite(true);
            } else {
                confirmSave();
            }
        }
    };

    const confirmSave = () => {
        saveFile(fileName, text);
        setFileName("");
        setError("");
        setText("");
        setShowModal(false);
        setFileTitle("");
        setShowOverWrite(false);
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
                {showOverwrite &&
                    <div className="notepad-modal-overwrite">
                        File already exists? <br />
                        Overwrite? <br />
                        <button onClick={confirmSave}>Yes</button>
                        <button onClick={() => setShowOverWrite(false)}>No</button>
                    </div>
                }
            </form>
        </div>
    )
};

export default SaveModal;