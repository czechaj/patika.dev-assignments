import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(`primary`);
  const values = {
    theme,
    setTheme
  };
  return (
    <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
  );
};
export default ThemeContext;
