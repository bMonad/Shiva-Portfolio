import React, { useEffect, useState } from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom';
import { route } from '../../constants/Route';
import logo from '../../assets/bMLogo-192.png';
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from '../hooks/ThemeContext.jsx';

const Header = ({ onNavClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [pageName, setPageName] = useState(true);
  const { lightTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageName(false);
      } else {
        setPageName(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header className="header">
      <nav className='nav container'>
        <div className='nav__main'>
          <Link to="/" onClick={onNavClick} className="nav__logo-div">
            <img src={logo} alt="logo" className="nav__logo-img" />
            <span className="nav__logo">Shivansh</span>
          </Link>
          <div className="nav__theme"
            onClick={toggleTheme}
          >
            {lightTheme ? (
              <BsMoonStarsFill className="nav__theme-icon" />
            ) : (
              <BsSun className="nav__theme-icon" />
            )}
          </div>
        </div>
        <div className={`nav__menu ${toggleMenu ? "show__menu" : ""}`}>
          <ul className='nav__list grid'>
            {route.map((item, index) => (
              <li onClick={handleToggleMenu} key={index}>
                <NavLink to={item.link} className={({ isActive }) => `nav__link${isActive ? ' active-link' : ''}`} onClick={onNavClick}>
                  {({ isActive }) => (
                    <>
                      <i className={`${item.icon} nav__icon ${isActive ? 'active-icon' : ''}`}></i>
                      {pageName && item.name}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <i className="uil uil-times nav__close" onClick={handleToggleMenu}></i>
        </div>

        {!toggleMenu &&
          <div className="nav__toggle" onClick={handleToggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header