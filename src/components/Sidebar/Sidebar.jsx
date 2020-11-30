import React from 'react';
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { 
    FiEdit,
    FiHome,
    FiUser,
    FiHeart,
    FiAlignLeft,
    // FiHelpCircle,
    // FiFlag,
} from 'react-icons/fi';

import './Sidebar.scss';

function Sidebar({ loggedIn }) {
    return (
        <nav className="sidebar">
            <ul className="sidebar-list">
                {
                    loggedIn &&
                        <li className="sidebar-list-item">
                            <Link className="sidebar-link" to="/new">
                                <IconContext.Provider value={{ className: "sidebar-icon" }}>
                                    <FiEdit />
                                </IconContext.Provider>
                                <span>New Post</span>
                            </Link>
                        </li>
                }
                <li className="sidebar-list-item">
                    <Link className="sidebar-link" to="/">
                        <IconContext.Provider value={{ className: "sidebar-icon" }}>
                            <FiHome id="home" />
                        </IconContext.Provider>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="sidebar-link" to="/profile">
                        <IconContext.Provider value={{ className: "sidebar-icon" }}>
                            <FiUser id="user" />
                        </IconContext.Provider>
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="sidebar-link" to="/likes">
                        <IconContext.Provider value={{ className: "sidebar-icon" }}>
                            <FiHeart id="heart" />
                        </IconContext.Provider>
                        <span>Likes</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link className="sidebar-link" to="/comments">
                        <IconContext.Provider value={{ className: "sidebar-icon" }}>
                            <FiAlignLeft />
                        </IconContext.Provider>
                        <span>Comments</span>
                    </Link>
                </li>
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
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="sidebar-extras-list-item">
                    <Link to="/api">
                        API
                    </Link>
                </li>
                <li className="sidebar-extras-list-item">
                    <Link to="/terms">
                        Terms
                    </Link>
                </li>
                <li className="sidebar-extras-list-item">
                    <p id="copyright">
                        Copyright &copy; Nández
                    </p>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;