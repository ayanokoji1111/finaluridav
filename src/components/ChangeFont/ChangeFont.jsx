import React from "react";
import "./ChangeFont.css";

const ChangeFont = ({ font, setFont }) => {
  const fontOptions = [
    "Sans-serif", "Serif", "Monospace", "Arial", "Verdana", 
    "Georgia", "Courier New", "Tahoma", "Trebuchet MS", 
    "Lucida Console", "Garamond", "Comic Sans MS", "Impact"
  ];

  return (
    <select 
      className="font-selector transition-effect" 
      value={font} 
      onChange={(e) => setFont(e.target.value)}
    >
      {fontOptions.map((name, idx) => (
        <option key={idx} value={name}>{name}</option>
      ))}
    </select>
  );
};

export default ChangeFont;
