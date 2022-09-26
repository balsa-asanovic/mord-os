import "./window.css";
import Draggable from 'react-draggable';
import Notepad from '../Applications/Notepad/Notepad';
import Files from "../Applications/Files/Files";
import Browser from "../Applications/Browser/Browser";
import RssFeed from "../Applications/RssFeed/RssFeed";
import Gallery from "../Applications/Gallery/Gallery";

const Window = ({ id, title, closeWindow, addWindow, zIndex, top, left, onWindowClick, textContent, fileName }) => {

    const getApp = () => {
        switch (title) {
            case 'Browser':
                return <Browser />;
            case 'Gallery':
                return <Gallery />;
            case 'Rss Feed':
                return <RssFeed />;
            case 'Camera':
                return '';
            case 'Notepad':
                return <Notepad textContent={textContent} fileName={fileName} />;
            case 'Files':
                return <Files openNotepad={addWindow} />;
            default:
                return;
        }
    };

    return (
        <Draggable handle=".window-header" onMouseDown={() => onWindowClick(id)}>
            <div className="window-main" style={{ zIndex: zIndex, top: top, left: left }} onContextMenu={(e) => e.preventDefault()}>
                <div className="window-header">
                    <span>{title}</span>
                    <span className="window-close" onClick={() => closeWindow(id)}>X</span>
                </div>
                <div className="window-body">{getApp()}</div>
            </div>
        </Draggable>
    )
};

export default Window;