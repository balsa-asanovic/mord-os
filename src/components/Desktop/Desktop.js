import './desktop.css';
import Taskbar from '../Taskbar/Taskbar';
import Icon from '../Icon/Icon';
import { defaultIcons } from '../../constants/defaultIcons';
import Window from '../Window/Window';
import { useState } from 'react';

const Desktop = () => {
    const [windowsList, setWindowsList] = useState([]);

    const addWindow = (window) => {
        setWindowsList(prev => [...prev, window]);
    };

    const closeWindow = (key) => {
        setWindowsList(prev => prev.filter((item, index) => index !== key))
    };

    return (
        <div className="desktop-main">
            <Taskbar />
            {defaultIcons.map((item) =>
                <Icon key={item.id} title={item.title} picture={item.picture} doubleClick={addWindow} />
            )}
            {windowsList.map((item, index) =>
                <Window key={index} index={index} title={item.title} closeWindow={closeWindow} />
            )}
        </div>
    )
};

export default Desktop;