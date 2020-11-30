import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';
import { parseDate } from '../../utils';

import './Notification.scss';

function Notification(props) {

    const parsedDate = parseDate(props.date);
    const description = `${props.username} ${props.action}`
                        + (props.action === 'comment' ? 'ed on ' : 'd ') // 'commented on' or 'liked'
                        + 'your post';

    return (
        <div className={"notification-card" + (props.action === 'comment' ? " comment" : "")}>
            <IconContext.Provider value={{ className: "action-icon" }}>
                {props.action === 'like' ? <FiHeart id="heart" /> : <FiAlignLeft id="comment" />}
            </IconContext.Provider>
            <div className="notification-metadata">
                <div className="notification-description">
                    { description }
                    <span className="notification-date">
                        { parsedDate }
                    </span>
                </div>
            </div>
            
        </div>
    );
}

export default Notification;