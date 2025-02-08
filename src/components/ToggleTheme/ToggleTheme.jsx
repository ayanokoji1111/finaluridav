import React, { useEffect, useState } from "react";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="toggle-container" onClick={() => setDarkMode(!darkMode)}>
      <span className="toggle-icon">{darkMode ? "🌙" : "☀️"}</span>
    </div>
  );
};

export default ToggleTheme;
