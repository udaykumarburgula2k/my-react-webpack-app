import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "1rem" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
