import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemedComponent from "./ThemedComponent";

const ThemeExamplePage = () => {
  return (
    <div>
      <h2>Theme Context Example</h2>
      <ThemeSwitcher />
      <ThemedComponent />
    </div>
  );
};

export default ThemeExamplePage;
