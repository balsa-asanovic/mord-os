import "./icon.css";
import Draggable from 'react-draggable';

const Icon = ({ title, picture, doubleClick }) => {

    return (
        <Draggable>
            <div className="icon-main" onDoubleClick={() => doubleClick({ title, zIndex: 0 })}>
                <div style={{backgroundImage: "url(" + picture + ")"}} className="icon-pic"></div>
                <div className="icon-text">{title}</div>
            </div>
        </Draggable>
    )
};

export default Icon;