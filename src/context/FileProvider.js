import { createContext, useState } from "react";

const FileContext = createContext({});

export const FileProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    const saveFile = (fileName, text) => {
        const date = new Date();
        const dateFormat = date.toLocaleString('default', { month: 'short' }) + " " + date.getDate().toString().padStart(2, '0') + " " + date.getFullYear().toString();
        setFiles((prev) => [...prev, { fileName, text, date: dateFormat }]);
    };

    return (
        <FileContext.Provider value={{ files, setFiles, saveFile }}>{children}</FileContext.Provider>
    )
};

export default FileContext;