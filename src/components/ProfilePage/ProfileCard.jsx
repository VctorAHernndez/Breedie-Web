import React from 'react';
import './ProfileCard.scss';
import { parseDate } from '../../utils';

function ProfileCard({ username, src, dateJoined, email }) {

    const parsedDate = parseDate(dateJoined);

    return (
        <div className="profile-card">
            <div className="profile-picture">
                <img src={src} alt="profile-pic"/>
            </div>
            <div className="profile-details">
                <span className="username">
                    {username}
                </span>
                <div className="join-date">
                    Joined {parsedDate}
                </div>
                <div className="email">
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <span className="post-count">
                    3 posts
                </span>
                <span className="like-count">
                    32 likes
                </span>
                <span className="comment-count">
                    10 comments
                </span>
            </div>
        </div>
    );
}

export default ProfileCard;