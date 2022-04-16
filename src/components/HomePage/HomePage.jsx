import React from 'react';
import Explore from '../Explore/Explore';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { Analytics } from '../../services';

// FAKE DATA
import { activities } from '../../data';

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
