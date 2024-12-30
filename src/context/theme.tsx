import { createContext} from "react";

// Define the shape of the context
interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);
