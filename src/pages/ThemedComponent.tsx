import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid", borderColor: theme === "dark" ? "#ccc" : "#333" }}>
      <p>This component also uses the <strong>{theme}</strong> theme.</p>
    </div>
  );
};

export default ThemedComponent;
