import "./files.css"
import { useContext, useEffect } from 'react';
import FileContext from "../../../context/FileProvider";

const Files = ({ openNotepad }) => {
    const { files } = useContext(FileContext);

    useEffect(() => {
        console.log(files);
    }, []);

    const onRightClick = (e, text) => {
        openNotepad({ title: "Notepad", textContent: text });
    };

    return (
        <div className="files-main">
            <table className="table-files">
                <tr>
                    <th>File Name</th>
                    <th>Date Created</th>
                </tr>
                {files.map((file, index) =>
                    <tr key={index} onContextMenu={(e) => onRightClick(e, file.text)}>
                        <td>{file.fileName}</td>
                        <td>{file.date}</td>
                    </tr>
                )}
            </table>
        </div>
    )
};

export default Files;