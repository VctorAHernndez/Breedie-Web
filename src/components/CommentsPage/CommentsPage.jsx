import React from 'react';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { Analytics } from '../../services';

// FAKE DATA
import { comments } from '../../data';

const CommentsPage = () => {
  // Record comments page visit
  Analytics.pageview('/comments');

  return (
    <section className="section-panel">
      <ActivityFeed sectionTitle="Your Comments" activities={comments} />
    </section>
  );
};

export default CommentsPage;
