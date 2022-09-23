import { useEffect, useState } from 'react';
import './taskbar.css';

const Taskbar = () => {
    const [date, setDate] = useState(() => {
        const fullDate = new Date();
        return fullDate.toLocaleString('default', { month: 'short' }) + " " + fullDate.getDay().toString() + " " + fullDate.getFullYear().toString();
    });
    const [time, setTime] = useState(() => {
        const fullDate = new Date();
        return fullDate.getHours().toString().padStart(2, '0') + ":" + fullDate.getMinutes().toString().padStart(2, '0') + ":" + fullDate.getSeconds().toString().padStart(2, '0');
    });

    useEffect(() => {
        setInterval(() => {
            const fullDate = new Date();
            setDate(fullDate.toLocaleString('default', { month: 'short' }) + " " + fullDate.getDay().toString() + " " + fullDate.getFullYear().toString());
            setTime(fullDate.getHours().toString().padStart(2, '0') + ":" + fullDate.getMinutes().toString().padStart(2, '0') + ":" + fullDate.getSeconds().toString().padStart(2, '0'));
        }, 1000)
    });

    return (
        <div className="taskbar-main">
            <span className="taskbar-title">Mord OS </span>
            <span className="taskbar-date">{date}</span>
            <span className="taskbar-time">{time}</span>
        </div>
    )
};

export default Taskbar;