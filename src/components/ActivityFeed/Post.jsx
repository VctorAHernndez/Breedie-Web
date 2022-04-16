import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './Post.scss';

// TODO: Later change generateColor for profilepics
import { generateColor, parseDate } from '../../utils';

const Post = ({ date, thumbnail, alt, username, caption, likeCount, commentCount }) => {
  const parsedDate = parseDate(date);

  return (
    <div className="post-card">
      <div className="card-image">
        <img src={thumbnail} alt={alt} />
      </div>
      <div className="post-info">
        <div className="post-profile">
          <div className="username">{username}</div>
          <div className="profile-pic">
            {/* props.profilePic */}
            <div className="post-profile-picture">
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '100%',
                  backgroundColor: generateColor(),
                }}
              />
            </div>
          </div>
        </div>
        <div className="post-caption">
          {caption} {/* prepare */}
        </div>
        <div className="post-metadata">
          <div className="post-date">{parsedDate}</div>
          <div className="post-actions">
            <IconContext.Provider value={{ className: 'action-icons' }}>
              <FiHeart id="heart" />
            </IconContext.Provider>
            <div id="like-count">{likeCount}</div>
            <IconContext.Provider value={{ className: 'action-icons' }}>
              <FiAlignLeft id="comment" />
            </IconContext.Provider>
            <div id="comment-count">{commentCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  date: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Post;
