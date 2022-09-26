import "./files.css"
import { useContext, useEffect } from 'react';
import FileContext from "../../../context/FileProvider";
import { FaSort } from "react-icons/fa";

const Files = ({ openNotepad }) => {
    const { files, orderBy } = useContext(FileContext);

    const onDoubleClick = (e, text, fileName) => {
        openNotepad({ title: "Notepad", textContent: text, fileName: fileName });
    };

    return (
        <div className="files-main">
            <table className="table-files">
                <thead>
                    <tr>
                        <th onClick={() => orderBy("name")}>File Name <FaSort /></th>
                        <th onClick={() => orderBy("date")}>Date Created <FaSort /></th>
                    </tr>
                </thead>
                <tbody>
                {files.map((file, index) =>
                    <tr key={index} onDoubleClick={(e) => onDoubleClick(e, file.text, file.fileName)}>
                        <td>{file.fileName}</td>
                        <td>{file.date}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
};

export default Files;