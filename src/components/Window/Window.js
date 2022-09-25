import "./window.css";
import Draggable from 'react-draggable';

const Window = ({ id, title, closeWindow, zIndex, top, left, onWindowClick }) => {

    return (
        <Draggable handle=".window-header" onStart={() => onWindowClick(id)}>
            <div className="window-main" style={{ zIndex: zIndex, top: top, left: left }}>
                <div className="window-header">
                    <span>{title}</span>
                    <span className="window-close" onClick={() => closeWindow(id)}>X</span>
                </div>
                <div className="window-body">Body</div>
            </div>
        </Draggable>
    )
};

export default Window;