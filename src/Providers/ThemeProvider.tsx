import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/theme";

// Create a provider for the context
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState("");
    
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        console.log(theme);
        if (theme) {
            setTheme(theme);
        }
        else
            setTheme("dark");
    }, []);

    useEffect(() => {
        if(theme === "") return;
        if (theme == 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem("theme", theme);
        console.log(theme, localStorage.getItem("theme"));
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
