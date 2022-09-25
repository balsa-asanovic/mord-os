import './desktop.css';
import Taskbar from '../Taskbar/Taskbar';
import Icon from '../Icon/Icon';
import { defaultIcons } from '../../constants/defaultIcons';
import Window from '../Window/Window';
import { useState } from 'react';

const Desktop = () => {
    const [windowsList, setWindowsList] = useState([]);
    const [numberOfWindows, setNumberOfWindows] = useState(0);
    const [zIndex, setZIndex] = useState(1);
    // const [windowPosition, setWindowPosition] = useState(10);
    const [windowPosition, setWindowPosition] = useState({ top: 10, left: 10 });

    const addWindow = (window) => {
        setNumberOfWindows(prev => prev + 1);
        setWindowsList(prev => [...prev, { ...window, id: numberOfWindows, top: windowPosition.top + "%", left: windowPosition.left + "%" }]);
        const newPosition = { top: windowPosition.top + 4, left: windowPosition.left + 4 };
        if (numberOfWindows % 4 === 1 && numberOfWindows > 1) {
            newPosition.top = 10;
            newPosition.left += 1;
        }
        setWindowPosition(newPosition);
    };

    const closeWindow = (id) => {
        setWindowsList(prev => prev.filter((item) => item.id !== id));
        setNumberOfWindows(prev => prev - 1);
    };

    const onWindowClick = (id) => {
        console.log("window click");
        setZIndex(prev => prev + 1);
        setWindowsList(prev => prev.map((item) =>
            item.id === id ? { ...item, zIndex: zIndex } : item
        ));
    };

    return (
        <div className="desktop-main">
            <Taskbar />
            {defaultIcons.map((item) =>
                <Icon key={item.id} title={item.title} picture={item.picture} doubleClick={addWindow} />
            )}
            {windowsList.map((item) =>
                <Window key={item.id} id={item.id} title={item.title} closeWindow={closeWindow} top={item.top} left={item.left} zIndex={item.zIndex} onWindowClick={onWindowClick} />
            )}
        </div>
    )
};

export default Desktop;