import React from 'react';

// FAKE COMMENTS
import { comments } from '../../data';
import { Analytics } from '../../services';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

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
