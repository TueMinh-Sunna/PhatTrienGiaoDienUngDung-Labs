import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

function Layout() {
  const { theme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: 20,
  };

  return (
    <div style={style}>
      <h1>{theme.toUpperCase()} THEME</h1>
      <Card />
    </div>
  );
}

function Card() {
  const { theme } = useContext(ThemeContext);

  const style = {
    border: "1px solid",
    padding: 20,
    marginTop: 20,
  };

  return (
    <div style={style}>
      <p>Current theme: {theme}</p>
      <Button />
    </div>
  );
}

function Button() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeSwitcher;