import './desktop.css';
import Taskbar from '../Taskbar/Taskbar';
import Icon from '../Icon/Icon';
import Draggable from 'react-draggable';

const Desktop = () => {

    return (
        <div className="desktop-main">
            <Taskbar />
            <Icon />

        </div>
    )
};

export default Desktop;