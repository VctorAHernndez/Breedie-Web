import React from 'react';

// FAKE DATA
import { activities } from '../../data';
import { Analytics } from '../../services';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import Explore from '../Explore/Explore';

const HomePage = () => {
  // Record home page visit
  Analytics.pageview('/');

  return (
    <section className="section-panel">
      <Explore />
      <ActivityFeed sectionTitle="Activity Feed" activities={activities} />
    </section>
  );
};

export default HomePage;
