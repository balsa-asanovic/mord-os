import { createContext, useState } from "react";

const FileContext = createContext({});

export const FileProvider = ({ children }) => {
    const [files, setFiles] = useState([]);
    const [ascDesc, setAscDesc] = useState(1);

    const saveFile = (fileName, text) => {
        const date = new Date();
        const dateFormat = date.toLocaleString('default', { month: 'short' }) + " " + date.getDate().toString().padStart(2, '0') + " " + date.getFullYear().toString();
        const time = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');

        // if file with given name already exists, overwrite it
        files.filter((file) => file.fileName === fileName).length > 0 ?
            setFiles(
                files.map((file) =>
                    file.fileName === fileName ? { fileName, text, date: dateFormat + " " + time } : file
                )
            )
            :
            setFiles((prev) => [...prev, { fileName, text, date: dateFormat + " " + time }]);
    };

    const orderBy = (type) => {
        switch (type) {
            case "name":
                setFiles([...files].sort((a, b) =>
                    a.fileName.localeCompare(b.fileName) * ascDesc
                ));
                break;
            case "date":
                setFiles([...files].sort((a, b) =>
                    (new Date(a.date) - new Date(b.date)) * ascDesc
                ));
                break;
            default:
                break;
        }
        setAscDesc(prev => prev * -1);
    };

    return (
        <FileContext.Provider value={{ files, setFiles, saveFile, orderBy }}>{children}</FileContext.Provider>
    )
};

export default FileContext;