import React from 'react';

// FAKE DATA
import { activities } from '../../data';
import { Analytics } from '../../services';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const LikesPage = () => {
  // Filter notifications out from the fake data
  const activitiesFiltered = activities.filter((activity) => activity.type === 'post');

  // Record likes page visit
  Analytics.pageview('/likes');

  return (
    <section className="section-panel">
      <ActivityFeed sectionTitle="Your Likes" activities={activitiesFiltered} />
    </section>
  );
};

export default LikesPage;
