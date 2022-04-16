import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import './ActivityFeed.scss';

const Post = lazy(() => import('./Post'));
const Notification = lazy(() => import('./Notification'));
const UserComment = lazy(() => import('./UserComment'));

const ActivityFeed = ({ sectionTitle, activities }) => {
  const cardRenderer = (activity) => {
    switch (activity.type) {
      case 'post':
        return (
          <Post
            key={activity.id + '-post'}
            id={activity.id}
            caption={activity.caption}
            date={activity.date}
            likeCount={activity.likeCount}
            commentCount={activity.commentCount}
            thumbnail={activity.thumbnail}
            alt={activity.alt}
            username={activity.username}
            profilePic={activity.profilePic}
            userId={activity.userId}
          />
        );
      case 'notification':
        return (
          <Notification
            key={activity.id + '-' + activity.action}
            id={activity.id}
            date={activity.date}
            action={activity.action}
            postId={activity.postId}
            userId={activity.userId}
            username={activity.username}
            profilePic={activity.profilePic}
          />
        );
      case 'user-comment':
        return (
          <UserComment
            key={activity.id + '-user-comment'}
            id={activity.id}
            date={activity.date}
            comment={activity.comment}
            postId={activity.postId}
            userId={activity.userId}
            username={activity.username}
            profilePic={activity.profilePic}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="section-title">{sectionTitle}</h1>
      {activities.map((activity) => (
        <Suspense key={activity.id} fallback={`Loading Post ${activity.id}...`}>
          {cardRenderer(activity)}
        </Suspense>
      ))}
    </div>
  );
};

ActivityFeed.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ActivityFeed;
