import React, { useState } from 'react';
import './Sidebar.css'; // You can style your sidebar in a separate CSS file

function Sidebar({ isSidebarOpen, closeSidebar }) {
    const [activeLink, setActiveLink] = useState('Home'); // Set the initially active link

    const handleLinkClick = (link) => {
        setActiveLink(link);
        // You can also add navigation logic here, such as using React Router to navigate to different pages.
    };

    return (
        <div className="Sidebar">
            <button
                className="close-button"
                onClick={closeSidebar}
                style={{ display: isSidebarOpen ? 'block' : 'none' }}
            >
                &times;
            </button>
            <ul>
                <li className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>
                    <a href="#home" onClick={() => handleLinkClick('Home')}>Home</a>
                </li>
                <li className={activeLink === 'Projects' ? 'active' : ''} onClick={() => handleLinkClick('Projects')}>
                    <a href="#work" onClick={() => handleLinkClick('Projects')}>Projects</a>
                </li>
                <li className={activeLink === 'Blog' ? 'active' : ''}>
                    <a href="#blog" onClick={() => handleLinkClick('Blog')}>Blog</a>
                </li>
                <li className={activeLink === 'About' ? 'active' : ''}>
                    <a href="#about" onClick={() => handleLinkClick('About')}>About</a>
                </li>
                <li className={activeLink === 'Contact' ? 'active' : ''}>
                    <a href="#contact" onClick={() => handleLinkClick('Contact')}>Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
