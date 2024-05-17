// Header.js

import React, { useState } from 'react';
import './Header.css'; // Import CSS file
import { Link } from 'react-router-dom';
import Login from '../../Screens/LoginSignUp/Login'; // Assuming you have a Login component

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const toggleLoginDialog = () => {
        setShowLoginDialog(!showLoginDialog);
    };
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };
    
    return (
        <header>
            <div className="header-left">
                <div className="logo">
                    <Link to='/'> <span>FLCS</span> </Link>
                </div>
                <nav className="nav">
                    <ul >
                        <li>Feed</li>
                        <li className="dropdown">
                            Explore
                            <div className="dropdown-content">
                                <div className="submenu">
                                    <span>Top Universities</span>
                                    <div className="submenu-options">
                                        <div className="submenu-option">Option 1</div>
                                        <div className="submenu-option">Option 2</div>
                                    </div>
                                </div>
                                <div className="submenu">
                                    <span>Popular Courses</span>
                                    <div className="submenu-options">
                                        <div className="submenu-option">Option 3</div>
                                        <div className="submenu-option">Option 4</div>
                                        <div className="submenu-option">Option 5</div>
                                        <div className="submenu-option">Option 6</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li onClick={toggleLoginDialog}>Login</li>
                        <Link to='/college-finder'><li>College Finder</li></Link>
                        <li>Admits & Rejects</li>
                        <Link to='/all-programs'><li>Programs</li></Link>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <input type="text" placeholder="Search..." />
                <button className='login' onClick={toggleLoginDialog}>Login</button>
                <button className='download'>Download App</button>
            </div>
            <button className='menu-icon' onClick={toggleMenu}>Show</button>
            {showMenu && <MobileMenu onClose={toggleMenu} showMenu={showMenu} />}
            {showLoginDialog && <LoginDialog onClose={toggleLoginDialog} />}
        </header>
    );
};

export default Header;

const LoginDialog = ({ onClose }) => {
    return (
        <div className="login-dialog">
            <div className="login-dialog-content">
                <div className='cross-dialogbox'>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <Login />
            </div>
        </div>
    );
};


const MobileMenu = ({ onClose, showMenu }) => {
    return (
        <div className={`mobile-menu ${showMenu ? 'show-menu' : ''}`}>
            <h2>Ayush raja</h2>
        </div>
    );
};
