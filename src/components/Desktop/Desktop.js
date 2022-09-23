import './desktop.css';
import Taskbar from '../Taskbar/Taskbar';
import Icon from '../Icon/Icon';
import { defaultIcons } from '../../constants/defaultIcons';

const Desktop = () => {

    return (
        <div className="desktop-main">
            <Taskbar />
            {defaultIcons.map((item) =>
                <Icon key={item.id} title={item.title} picture={item.picture} />
            )}

        </div>
    )
};

export default Desktop;