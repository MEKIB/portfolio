import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.jpg';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [underline, setUnderline] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    const navLinkStyles = ({ isActive }) => {
        return {
            // fontWeight: isActive ? 'bold' : 'normal',
            // color: isActive ? 'magenta' : 'black',
        };
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.body.classList.toggle("theme-dark", theme === "light");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="logo" />
                <ul className={`nav-items ${menuOpen ? 'open' : ''}`} id='navmenu'>
                    <NavLink style={navLinkStyles} to="/" onClick={() => setUnderline("home")}>
                        <li>Home {underline === "home" && <hr />}</li>
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/about" onClick={() => setUnderline("about")}>
                        <li>About Me {underline === "about" && <hr />}</li>
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/services" onClick={() => setUnderline("services")}>
                        <li>Services {underline === "services" && <hr />}</li>
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/project" onClick={() => setUnderline("project")}>
                        <li>Project {underline === "project" && <hr />}</li>
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/contact" onClick={() => setUnderline("contact")}>
                        <li>Contact {underline === "contact" && <hr />}</li>
                    </NavLink>
                </ul>
                <img src={theme === "light" ? moon : sun} alt="Theme Toggle" className='theme-icon' id='theme-icon' onClick={toggleTheme} />
                <img src={menuOpen ? close : menu} alt="Menu Toggle" className='menu-icon' id="menu-icon" onClick={toggleMenu} />
            </div>
        </nav>
    );
}

export default Navbar;
