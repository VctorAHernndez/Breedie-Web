import React from 'react';
import { OutboundLink } from 'react-ga';

import logo from '../../images/logo.png';
import { Analytics } from '../../services';

import './AboutPage.scss';

const NewTag = () => {
  return <sup className="new-tag">NEW!</sup>;
};

const AboutPage = () => {
  // Record about page visit
  Analytics.pageview('/about');

  return (
    <div className="section-panel">
      <h1 className="section-title">About</h1>
      <div className="about-card">
        <div className="about-header">
          <div className="logo">
            <img src={logo} alt="breedie-logo" />
          </div>
          <div className="headlines">
            <h2>Find your spirit dog breed!</h2>
            <h3>Classify an unknown dog!</h3>
            <h3>Share your findings!</h3>
          </div>
        </div>
        <p className="intro-paragraph">
          Originally an{' '}
          <OutboundLink
            eventLabel="Breedie iOS"
            to="https://apps.apple.com/us/app/breedie/id1492837097"
            target="_blank"
          >
            iOS App
          </OutboundLink>
          , <strong>Breedie</strong> was at first developed as a lightweight app that instantly
          determines a dog&apos;s breed with a simple picture in order to facilitate dog rescue and
          adoption. After some time, the native app was adopted to this web application in the form
          of a small social-media website.
        </p>
        {/* <p>Users are encouraged to find their spirit animal by taking photos of themselves and friends!</p> */}
        <p className="feature-list-anouncement">
          The <strong>same great features</strong> from the native app remain, with some added
          functionalities:
        </p>
        <ul className="feature-list">
          <li>Private, on-device machine learning</li>
          <li>Instant performance</li>
          <li>Take / choose picture</li>
          <li>
            Share picture in the form of a post <NewTag />
          </li>
          <li>
            Profile, comments, and likes features <NewTag />
          </li>
          <li>
            Login with Google, Facebook, Twitter or Email <NewTag />
          </li>
          <li>
            Dark Mode <small>(underway)</small> <NewTag />
          </li>
        </ul>
        <p className="charity-paragraph">
          To help dogs in need, <strong>visit</strong>:{' '}
          <OutboundLink eventLabel="Love4Satos" to="https://love4satos.org" target="_blank">
            Love4Satos.org
          </OutboundLink>
        </p>
        <p className="support-paragraph">
          For support, feature requests and inquiries, please email{' '}
          <a href="mailto:support@vhernandez.me">support@vhernandez.me</a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
