import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart, FiAlignLeft } from 'react-icons/fi';
import './Explore.scss';

// Generate Fake Profile Pics
import { generateColor } from '../../utils';

function ExploreCard(props) {
    return (
        <div className="explore-card">
            <div className="card-image">
                <img src={props.src} alt={props.alt}/>
            </div>
            <p>{props.description }</p>
            <div className="explore-card-icons">
                <div className="explore-actions">
                    <IconContext.Provider value={{ className: "action-icons" }}>
                        <FiHeart id="heart" />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "action-icons" }}>
                        <FiAlignLeft id="comment" />
                    </IconContext.Provider>
                </div>
                <div className="post-profile-picture">
                    <div style={{ 
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '100%',
                        backgroundColor: generateColor()
                    }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreCard;