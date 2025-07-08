/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isThemeDark, setIsThemeDark] = useState(true);

    return (
        <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeChange = () => useContext(ThemeContext);
