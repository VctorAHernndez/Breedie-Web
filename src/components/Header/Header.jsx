import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import './Header.scss';

// FAKE DATA
import { user } from '../../data';

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <div className="branding">
        <span className="logo">
          <Link to="/">
            <img src={logo} alt="breedie-logo" />
          </Link>
        </span>
        <span className="breedie-title">
          <Link to="/">Breedie</Link>
        </span>
      </div>
      {loggedIn ? (
        <div className="account">
          <span className="compose-msg">
            <Link to="/new">
              <FiEdit />
            </Link>
          </span>
          <span className="profile-picture">
            <Link to="/profile">
              <img src={user.src} alt="user-profile" />
            </Link>
          </span>
        </div>
      ) : (
        <div className="account">
          <Link className="" to="login">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
