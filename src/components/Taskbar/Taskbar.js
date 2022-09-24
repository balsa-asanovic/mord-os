import { useEffect, useState } from 'react';
import './taskbar.css';
import useAuth from '../../hooks/useAuth';

const Taskbar = () => {
    const [date, setDate] = useState(() => {
        const fullDate = new Date();
        return fullDate.toLocaleString('default', { month: 'short' }) + " " + fullDate.getDate().toString().padStart(2, '0') + " " + fullDate.getFullYear().toString();
    });
    const [time, setTime] = useState(() => {
        const fullDate = new Date();
        return fullDate.getHours().toString().padStart(2, '0') + ":" + fullDate.getMinutes().toString().padStart(2, '0') + ":" + fullDate.getSeconds().toString().padStart(2, '0');
    });
    const { setAuth, setAuthenticated} = useAuth();

    const logOut = () => {
        localStorage.removeItem('userCredentials');
        setAuth({});
        setAuthenticated(false);
    };

    useEffect(() => {
        setInterval(() => {
            const fullDate = new Date();
            setDate(fullDate.toLocaleString('default', { month: 'short' }) + " " + fullDate.getDate().toString().padStart(2, '0') + " " + fullDate.getFullYear().toString());
            setTime(fullDate.getHours().toString().padStart(2, '0') + ":" + fullDate.getMinutes().toString().padStart(2, '0') + ":" + fullDate.getSeconds().toString().padStart(2, '0'));
        }, 1000)
    });

    return (
        <div className="taskbar-main">
            <span className="taskbar-dropdown">
                <span className="taskbar-title">Mord OS </span>
                <button onClick={logOut} className="taskbar-dropdown-content">Log Out</button>
            </span>
            <span className="taskbar-date">{date}</span>
            <span className="taskbar-time">{time}</span>
        </div>
    )
};

export default Taskbar;