import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "./NavDropdown";
import './Navbar.scss';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/d044eb6386bfb3acad1a399c0895ecf0c00ebf09/public/UPDATED-LOGO.svg" alt="logo" height='60' />
            </div>
            <ul className="links-container">
                <li className="nav-link">
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Home
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                </li>
                <li className="nav-dropdown">
                    <NavDropdown />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;