import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiAlignLeft } from 'react-icons/fi';
import { parseDate } from '../../utils';
import PropTypes from 'prop-types';
import './UserComment.scss';

const UserComment = ({ date, comment, username, postId }) => {
  const parsedDate = parseDate(date);

  return (
    <div className="user-comment-card comment">
      {/* <div> */}
      <IconContext.Provider value={{ className: 'action-icon' }}>
        <FiAlignLeft id="comment" />
      </IconContext.Provider>
      {/* </div> */}
      <div className="notification-metadata">
        <div className="notification-description">
          <span className="comment">{`"${comment}"`}</span> on{' '}
          <span className="username">{`${username}'s`}</span>{' '}
          <Link to={`/post/${postId}`}>post</Link>
        </div>
        <div className="notification-date">{parsedDate}</div>
      </div>
    </div>
  );
};

UserComment.propTypes = {
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};

export default UserComment;
