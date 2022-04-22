import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaRegComment } from 'react-icons/fa';
import { FiHome, FiUser, FiHeart } from 'react-icons/fi';
import { matchPath } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

import './Sidebar.scss';

const SIDEBAR_LINKS = [
  {
    linkPathname: '/',
    linkText: 'Home',
    iconId: 'home',
    iconComponent: FiHome,
  },
  {
    linkPathname: '/profile',
    linkText: 'Profile',
    iconId: 'user',
    iconComponent: FiUser,
  },
  {
    linkPathname: '/likes',
    linkText: 'Likes',
    iconId: 'heart',
    iconComponent: FiHeart,
  },
  {
    linkPathname: '/comments',
    linkText: 'Comments',
    iconId: 'comments',
    iconComponent: FaRegComment,
  },
];

const Sidebar = ({ loggedIn }) => {
  const { pathname } = useLocation();

  if (!loggedIn) {
    return null;
  }

  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {SIDEBAR_LINKS.map(({ linkPathname, linkText, iconComponent: IconComponent, iconId }) => {
          const isSectionActive = !!matchPath(pathname, { path: linkPathname, exact: true });
          return (
            <li className="sidebar-list-item" key={linkPathname}>
              <Link
                className={classNames('sidebar-link', isSectionActive && 'active')}
                to={linkPathname}
              >
                <span className="icon-container">
                  <IconContext.Provider value={{ className: 'sidebar-icon', size: 16 }}>
                    <IconComponent id={iconId} />
                  </IconContext.Provider>
                </span>
                <span className="sidebar-link-text">{linkText}</span>
              </Link>
            </li>
          );
        })}
        {/* <li className="sidebar-list-item">
          <Link className="sidebar-link" to="/faq">
            <IconContext.Provider value={{ className: "sidebar-icon" }}>
              <FiHelpCircle />
            </IconContext.Provider>
            <span>FAQ</span>
          </Link>
        </li> */}
        {/* <li className="sidebar-list-item">
          <Link className="sidebar-link" href="/report">
            <IconContext.Provider value={{ className: "sidebar-icon" }}>
              <FiFlag />
            </IconContext.Provider>
            <span>Report</span>
          </Link>
        </li> */}
      </ul>
      <ul className="sidebar-extras">
        <li className="sidebar-extras-list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="sidebar-extras-list-item">
          <Link to="/api">API</Link>
        </li>
        <li className="sidebar-extras-list-item">
          <Link to="/terms">Terms</Link>
        </li>
        <li className="sidebar-extras-list-item">
          <p id="copyright">Copyright &copy; Nández</p>
        </li>
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Sidebar;
