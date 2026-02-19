import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <button
        type="button"
        onClick={() => setIsDarkMode((prev) => !prev)} 
        aria-label="Toggle theme"
        className={cn(
            "p-2 rounded-full transition-colors duration-300",
            "focus:outline-none  ",
            className
          )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
}