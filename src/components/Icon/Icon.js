import "./icon.css";
import Draggable from 'react-draggable';

const Icon = ({ title, picture, doubleClick, highLighted }) => {

    return (
        <Draggable>
            <div className="icon-main" onDoubleClick={() => doubleClick({ title })} style={highLighted === title && {background: "rgba(195, 20, 50, 0.4)"}}>
                <div style={{backgroundImage: "url(" + picture + ")"}} className="icon-pic"></div>
                <div className="icon-text">{title}</div>
            </div>
        </Draggable>
    )
};

export default Icon;