import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';

import { parseDate } from '../../utils';

import './Notification.scss';

const Notification = ({ date, username, action }) => {
  const parsedDate = parseDate(date);
  const description =
    `${username} ${action}` +
    (action === 'comment' ? 'ed on ' : 'd ') + // 'commented on' or 'liked'
    'your post';

  return (
    <div className={'notification-card' + (action === 'comment' ? ' comment' : '')}>
      <IconContext.Provider value={{ className: 'action-icon' }}>
        {action === 'like' ? <FiHeart id="heart" /> : <FiAlignLeft id="comment" />}
      </IconContext.Provider>
      <div className="notification-metadata">
        <div className="notification-description">
          {description}
          <span className="notification-date">{parsedDate}</span>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  date: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default Notification;
