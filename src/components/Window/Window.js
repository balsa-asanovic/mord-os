import "./window.css";
import Draggable from 'react-draggable';

const Window = ({ index, title, closeWindow }) => {

    return (
        <Draggable handle=".window-header">
            <div className="window-main">
                <div className="window-header">
                    <span>{title}</span>
                    <span className="window-close" onClick={() => closeWindow(index)}>X</span>
                </div>
                <div className="window-body">Body</div>
                <div className="window-footer">Footer</div>
            </div>
        </Draggable>
    )
};

export default Window;