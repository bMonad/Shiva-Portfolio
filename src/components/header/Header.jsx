import React, { useEffect, useState } from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom';

const route = [
  { name: "Home", link: "#home", icon: "uil uil-estate" },
  { name: "About", link: "#about", icon: "uil uil-user" },
  { name: "Skills", link: "#skills", icon: "uil uil-file-alt" },
  { name: "Portfolio", link: "#portfolio", icon: "uil uil-briefcase-alt" },
  { name: "Contact", link: "#contact", icon: "uil uil-message" },
]

const Header = ({ activeNav, setActiveNav }) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [pageName, setPageName] = useState(true);

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
        <a href="#home" onClick={() => setActiveNav('#home')} className="nav__logo">Shivansh</a>

        <div className={`nav__menu ${toggleMenu ? "show__menu" : ""}`}>
          <ul className='nav__list grid'>
            {route.map((item, index) => (
              <li onClick={handleToggleMenu} key={index}>
                <a href={item.link} onClick={() => setActiveNav(item.link)} className={`nav__link ${activeNav === item.link ? 'active-link' : ''}`}>
                  <i className={`${item.icon} nav__icon`}></i>
                  {pageName && item.name}
                </a>
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