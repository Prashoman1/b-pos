import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface DarkMoodStateProps {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    toggleDarkMood?: () => void;
}

export default function useDarkMood(): DarkMoodStateProps {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMood = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
    };

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode") || "false");
    setIsDarkMode(darkMode);
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode, toggleDarkMood };
}
