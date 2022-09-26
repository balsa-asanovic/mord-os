import "./files.css"
import { useContext } from 'react';
import FileContext from "../../../context/FileProvider";
import { FaSort, FaTrash } from "react-icons/fa";

const Files = ({ openNotepad }) => {
    const { files, orderBy, deleteFile } = useContext(FileContext);

    const onDoubleClick = (text, fileName) => {
        openNotepad({ title: "Notepad", textContent: text, fileName: fileName });
    };

    return (
        <div className="files-main">
            <table className="table-files">
                <thead>
                    <tr>
                        <th onClick={() => orderBy("name")}>File Name <FaSort /></th>
                        <th onClick={() => orderBy("date")}>Date Created <FaSort /></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {files.map((file, index) =>
                    <tr key={index}>
                        <td onDoubleClick={() => onDoubleClick(file.text, file.fileName)}>{file.fileName}</td>
                        <td onDoubleClick={() => onDoubleClick(file.text, file.fileName)}>{file.date}</td>
                        <td onClick={() => deleteFile(file.fileName)}><FaTrash /></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
};

export default Files;