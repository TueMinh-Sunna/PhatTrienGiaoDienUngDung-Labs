import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeManager() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme}</h1>
      <Page />
    </div>
  );
}

function Page() {
  return <ThemeButton />;
}

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeManager;
