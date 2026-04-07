import './scrollup.css'
import { useState, useEffect, useCallback } from "react";

const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact'];

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = useCallback(() => {
    setShowScroll(window.scrollY >= 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClick = useCallback(() => {
    // Find the current section in view
    const scrollY = window.scrollY;
    let currentSectionIdx = 0;

    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        if (scrollY >= elTop - 10) { // -10 for a small margin
          currentSectionIdx = i;
        }
      }
    }

    // Scroll to the previous section if possible
    if (currentSectionIdx > 0) {
      const prevSection = document.getElementById(sectionIds[currentSectionIdx - 1]);
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Already at the top section, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!showScroll) return null;

  return (
    <button
      className={`scrollup__link ${showScroll ? "show-scroll" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to previous section"
      tabIndex={0}
    >
      <i className="uil uil-angle-double-up scrollup__icon"></i>
    </button>
  )
}

export default ScrollUp