import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';

import './Explore.scss';

// Generate Fake Profile Pics
import { generateColor } from '../../utils';

const ExploreCard = ({ src, alt, description }) => {
  return (
    <div className="explore-card">
      <div className="card-image">
        <img src={src} alt={alt} />
      </div>
      <p>{description}</p>
      <div className="explore-card-icons">
        <div className="explore-actions">
          <IconContext.Provider value={{ className: 'action-icons' }}>
            <FiHeart id="heart" />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: 'action-icons' }}>
            <FiAlignLeft id="comment" />
          </IconContext.Provider>
        </div>
        <div className="post-profile-picture">
          <div
            style={{
              width: '1rem',
              height: '1rem',
              borderRadius: '100%',
              backgroundColor: generateColor(),
            }}
          />
        </div>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExploreCard;
