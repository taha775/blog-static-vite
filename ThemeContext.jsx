  import React, { createContext, useState, useEffect, useContext } from 'react';

  // Create a Context
  const ThemeContext = createContext();

  // Create a provider component
  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      if(theme === "dark"){
        document.querySelector('body').style.backgroundColor = '#fff';
      }else{
        document.querySelector('body').style.backgroundColor = '#000';

      }
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // Create a custom hook to use the ThemeContext
  export const useTheme = () => {
    return useContext(ThemeContext);
  };
      