import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';
import './Post.scss';
import { generateColor, parseDate } from '../../utils'; // later change generateColor for profilepics


function Post(props) {
    
    let parsedDate = parseDate(props.date);

    return (
        <div className="post-card">
            <div className="card-image">
                <img src={props.thumbnail} alt={props.alt} />
            </div>
            <div className="post-info">
                <div className="post-profile">
                    <div className="username">
                        {props.username}
                    </div>
                    <div className="profile-pic">
                        {/* props.profilePic */}
                        <div className="post-profile-picture">
                            <div style={{ 
                                width: '1.5rem',
                                height: '1.5rem',
                                borderRadius: '100%',
                                backgroundColor: generateColor()
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-caption">
                    {props.caption} {/* prepare */}
                </div>
                <div className="post-metadata">
                    <div className="post-date">
                        { parsedDate }
                    </div>
                    <div className="post-actions">
                        <IconContext.Provider value={{ className: "action-icons" }}>
                            <FiHeart id="heart" />
                        </IconContext.Provider>
                            <div id="like-count">
                                {props.likeCount}
                            </div>
                        <IconContext.Provider value={{ className: "action-icons" }}>
                            <FiAlignLeft id="comment" />
                        </IconContext.Provider>
                            <div id="comment-count">
                                {props.commentCount}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;