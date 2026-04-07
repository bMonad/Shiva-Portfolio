
import { useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/project/Portfolio'
import ScrollUp from './components/scrollup/Scrollup'
import Skills from './components/skills/Skills'
import { route } from './constants/Route'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavClick = useRef(false);
  const observerRef = useRef(null);
  const previousSection = useRef(null);

  useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleNavClick = useCallback(() => {
    isNavClick.current = true;
    setTimeout(() => {
      isNavClick.current = false;
    }, 1000);
  }, []);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isNavClick.current) {
        const sectionId = entry.target.id;
        const path = sectionId === 'home' ? '/' : `/${sectionId}`;
        
        // Only update URL if section actually changed
        if (previousSection.current !== path) {
          previousSection.current = path;
          navigate(path, { replace: true });
        }
      }
    });
  }, [navigate]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.7,
    });

    route.forEach((section) => {
      const id = section.link.slice(1) || 'home';
      const el = document.getElementById(id);
      if (el) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (
    <>
      <Header onNavClick={handleNavClick} />

      <main className='main'>
        <Home onNavClick={handleNavClick} />
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
