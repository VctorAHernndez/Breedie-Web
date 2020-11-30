import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiAlignLeft } from 'react-icons/fi';
import { parseDate } from '../../utils';
import './UserComment.scss';

function UserComment(props) {

    const parsedDate = parseDate(props.date);

    return (
        <div className="user-comment-card comment">
            {/* <div> */}
                <IconContext.Provider value={{ className: "action-icon" }}>
                    <FiAlignLeft id="comment" />
                </IconContext.Provider>
            {/* </div> */}
            <div className="notification-metadata">
                <div className="notification-description">
                    <span className="comment">"{props.comment}"</span> on <span className="username">{props.username}'s</span> <Link to={`/post/${props.postId}`}>post</Link>
                </div>
                <div className="notification-date">
                    { parsedDate }
                </div>
            </div>
            
        </div>
    );
}

export default UserComment;