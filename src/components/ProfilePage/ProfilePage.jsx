import React from 'react';
import ProfileCard from './ProfileCard';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { Analytics } from '../../services';

// FAKE DATA
import { activities, user } from '../../data';

function ProfilePage() {

    // Filter out the notifications from fake data
    let activitiesFiltered = activities.filter(activity => activity.type === 'post');
    // Change the username of the fake data, which should be the logged in user
    activitiesFiltered.forEach(activity => activity.username = user.username);
    
    // Record profile page visit
    Analytics.pageview('/profile');

    return (
        <div className="section-panel">
            <ProfileCard
                username={user.username}
                src={user.src}
                dateJoined={user.dateJoined}
                email={user.email}
            />
            <ActivityFeed 
                sectionTitle="Your Posts"
                activities={activitiesFiltered}
            />
        </div>
    );
}

export default ProfilePage;