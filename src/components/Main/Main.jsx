import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './Main.scss';

// Lazy Load Timeline, Ads, and other main parts
const ProfilePage = lazy(() => import('../ProfilePage/ProfilePage'));
const LikesPage = lazy(() => import('../LikesPage/LikesPage'));
const HomePage = lazy(() => import('../HomePage/HomePage'));
const CommentsPage = lazy(() => import('../CommentsPage/CommentsPage'));
const AboutPage = lazy(() => import('../AboutPage/AboutPage'));
const TermsPage = lazy(() => import('../TermsPage/TermsPage'));
const Ads = lazy(() => import('../Ads/Ads'));

const Main = ({ loggedIn }) => {
  // TODO: Refactor redirection logic
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <main className="main-section">
      <Route path="/new">
        <div className="section-panel">New Post</div>
      </Route>
      <Route path="/profile">
        <Suspense fallback={<div className="section-panel">Loading Profile...</div>}>
          <ProfilePage />
        </Suspense>
      </Route>
      <Route path="/likes">
        <Suspense fallback={<div className="section-panel">Loading Your Likes...</div>}>
          <LikesPage />
        </Suspense>
      </Route>
      <Route path="/comments">
        <Suspense fallback={<div className="section-panel">Loading Your Comments...</div>}>
          <CommentsPage />
        </Suspense>
      </Route>
      <Route path="/about">
        <Suspense fallback={<div className="section-panel">Loading About...</div>}>
          <AboutPage />
        </Suspense>
      </Route>
      <Route path="/api">
        <div className="section-panel">
          <div className="section-title">Coming Soon...</div>
        </div>
      </Route>
      <Route path="/terms">
        <Suspense fallback={<div className="section-panel">Loading Terms...</div>}>
          <TermsPage />
        </Suspense>
      </Route>
      <Route exact path="/">
        <Suspense fallback={<div className="section-panel">Loading Timeline...</div>}>
          <HomePage />
        </Suspense>
      </Route>
      <Suspense fallback={<div className="section-panel">Loading Ads...</div>}>
        <Ads />
      </Suspense>
    </main>
  );
};

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Main;
