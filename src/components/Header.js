import React from 'react'
import './Header.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <div className="Header">
            <button className="toggle-button" onClick={toggleSidebar}>
                {isSidebarOpen ? '☰' : '☰'} {/* Hamburger icon */}
            </button>
            {/* <header className="header">
                <nav className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header> */}
        </div>
    );
}

export default Header