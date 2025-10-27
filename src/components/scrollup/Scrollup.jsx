import './scrollup.css'
import { useState, useEffect, useCallback } from "react";
const ScrollUp = ({ setActiveNav }) => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = useCallback(() => {
    setShowScroll(window.scrollY >= 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClick = useCallback(() => {
    setActiveNav('#home');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [setActiveNav]);

  if (!showScroll) return null;

  return (
    <button className={`scrollup__link ${showScroll ? "show-scroll" : ""}`} onClick={handleClick} aria-label="Scroll to top">
      <i className="uil uil-angle-double-up scrollup__icon"></i>
    </button>
  )
}

export default ScrollUp