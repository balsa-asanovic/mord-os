import "./icon.css";
import Draggable from 'react-draggable';

const Icon = ({ title, picture }) => {

    return (
        <Draggable>
            <div className="icon-main" onDoubleClick={() => console.log("icon click")}>
                <div style={{backgroundImage: "url(" + picture + ")"}} className="icon-pic"></div>
                <div className="icon-text">{title}</div>
            </div>
        </Draggable>
    )
};

export default Icon;