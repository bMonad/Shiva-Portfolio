
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/project/Portfolio'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'
import { route } from './constants/Route'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavClick = useRef(false);

  const handleNavClick = () => {
    isNavClick.current = true;
    setTimeout(() => {
      isNavClick.current = false;
    }, 700);
  };

  useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavClick.current) return;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = route[0];

      for (let section of route) {
        const el = document.getElementById(section.link.slice(1));
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const elTop = window.scrollY + top;
          const elBottom = window.scrollY + bottom;
          if (scrollPosition >= elTop && scrollPosition < elBottom) {
            currentSection = section;
            break;
          }
        }
      }

      if (location.pathname !== currentSection.link) {
        navigate(currentSection.link, { replace: true });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navigate]);

  return (
    <>
      <Header onNavClick={handleNavClick} />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
