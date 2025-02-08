import React, { useState, useEffect } from "react";
import Dictionary from "./components/Dictionary/Dictionary";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import ChangeFont from "./components/ChangeFont/ChangeFont";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("Sans-serif");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app-container ${theme}`} style={{ fontFamily: font }}>
      <header className="header animate-header">
        <h1 className="app-title">Dictionary</h1>
        <div className="controls">
          <ChangeFont font={font} setFont={setFont} />
          <ToggleTheme theme={theme} setTheme={setTheme} />
        </div>
      </header>
      <main>
        <Dictionary font={font} />
      </main>
    </div>
  );
};

export default App;