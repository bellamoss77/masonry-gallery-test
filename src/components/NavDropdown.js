import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMountainSun, faSeedling, faPaw, faHouseCrack } from "@fortawesome/free-solid-svg-icons";

const NavDropdown = () => {
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    const toggleDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        const icon = iconRef.current;

        if (dropdownMenu.style.display === 'flex') {
            gsap.timeline()
                .to(dropdownMenu, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: () => dropdownMenu.style.display = 'none' })
                .to(icon, { rotate: 0, duration: 0.5, ease: 'power2.inOut' }, '<');
        } else {
            dropdownMenu.style.display = 'flex';
            gsap.timeline()
                .fromTo(dropdownMenu, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' })
                .to(icon, { rotate: 180, duration: 0.5, ease: 'power2.inOut' }, '<');
        }
    };

    const closeDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        gsap.timeline()
            .to(dropdownMenu, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: () => dropdownMenu.style.display = 'none' })
            .to(iconRef.current, { rotate: 0, duration: 0.5, ease: 'power2.inOut' }, '<');
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}
            className="dropdown-toggle">
                Galleries
                <FontAwesomeIcon icon={faCaretDown} ref={iconRef} />
            </button>
            <div ref={dropdownRef} className="dropdown-menu" style={{ display: 'none', overflow: 'hidden' }}>
                <NavLink to='/landscape' onClick={closeDropdown}>
                    <FontAwesomeIcon icon={faMountainSun} />
                    Landscape
                </NavLink>
                <NavLink to='/nature' onClick={closeDropdown}>
                    <FontAwesomeIcon icon={faSeedling} />
                    Nature
                </NavLink>
                <NavLink to='/pets' onClick={closeDropdown}>
                    <FontAwesomeIcon icon={faPaw} />
                    Pets
                </NavLink>
                <NavLink to='/ruins' onClick={closeDropdown}>
                    <FontAwesomeIcon icon={faHouseCrack} />
                    Ruins
                </NavLink>
            </div>
        </div>
    );
};

export default NavDropdown;