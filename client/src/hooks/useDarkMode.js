import { useState, useEffect } from "react";

export const useDarkMode = () => {
  // const [darkMode, setDarkMode] = useLocalStorage("key");
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0];
    if (darkMode === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });

  return [darkMode, setDarkMode];
};
