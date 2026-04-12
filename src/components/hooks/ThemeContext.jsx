import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : false;
  });

  const toggleTheme = () => {
    setLightTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'light' : 'dark');
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      lightTheme ? "light" : "dark"
    );
  }, [lightTheme]);

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
