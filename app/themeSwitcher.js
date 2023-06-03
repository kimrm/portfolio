"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ThemeSwitcher() {
  const [themeImage, setThemeImage] = useState("/icons8-light-50.png");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorScheme");

    if (savedTheme) {
      setTheme(savedTheme);
    }

    document.documentElement.style.setProperty("color-scheme", theme);

    switch (theme) {
      case "dark":
        setThemeImage("/icons8-light-50.png");
        break;
      case "light":
        setThemeImage("/icons8-dark-theme-50.png");
        break;
    }
  }, [theme]);

  function switchTheme() {
    switch (theme) {
      case "dark":
        saveTheme("light");
        break;
      case "light":
        saveTheme("dark");
        break;
    }
  }

  function saveTheme(colorScheme) {
    localStorage.setItem("colorScheme", colorScheme);
    setTheme(colorScheme);
  }

  return (
    <button onClick={switchTheme} className={styles.theme_button}>
      <Image src={themeImage} alt="Light/Dark theme" width={24} height={24} />
    </button>
  );
}
