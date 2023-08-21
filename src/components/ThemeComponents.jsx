import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

/**
 * Context with the current theme name, available themes, and a setter
 * @type {React.Context<!{theme: string, themeNames: string[], setTheme: function}>}
 */
const ThemeNameContext = createContext(null);

/**
 * Application wrapper to manage and save the theme.
 *
 * Responsible for reading and updating local storage and passing theme data down
 * through the styled-components ThemeProvider
 *
 * Default theme is the first one provided in `themes`
 *
 * @param themes {ThemeData[]}
 * @param children
 * @constructor
 */
function Theme({ themes, children }) {
  const themeMap = Object.fromEntries(
    themes.map((theme) => [theme.name, theme])
  );
  const themeNames = themes.map((theme) => theme.name);
  // use the first theme as the default unless the user has a dark theme
  const [theme, setTheme] = useState(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
    ) {
      return "dark";
    }
    return themes[0].name;
  });
  // track whether the user has changed the theme, otherwise sync with system theme
  const [hasUserSetTheme, setHasUserSetTheme] = useState(false);
  // load the initial value of theme from localstorage
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme !== theme && Object.hasOwn(themeMap, savedTheme)) {
      setTheme(savedTheme);
      setHasUserSetTheme(true);
    }
    document.body.style.backgroundColor = themeMap[theme].background;
  }, []);
  // sync light vs dark mode with system theme only if the user has not set the theme
  useEffect(() => {
    if (!hasUserSetTheme && window.matchMedia) {
      const handlePrefChange = (event) =>
        event.matches ? setTheme("dark") : setTheme("light");
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handlePrefChange);
      return window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handlePrefChange);
    }
  }, [hasUserSetTheme]);
  // when the theme changes, update the body background and set up the transition reset
  //  so we get a cool transition effect
  useEffect(() => {
    const removeGlobalTransition = setTimeout(
      () => document.body.classList.remove("transition-all"),
      2000
    );
    document.body.style.backgroundColor = themeMap[theme].background;
    return () => {
      document.body.style.backgroundColor = null;
      window.clearTimeout(removeGlobalTransition);
    };
  }, [theme]);
  const userSetTheme = (name) => {
    document.body.classList.add("transition-all");
    if (themeNames.includes(name)) {
      // only save theme if the user intentionally sets it
      window.localStorage.setItem("theme", name);
      setTheme(name);
      setHasUserSetTheme(true);
    }
  };
  return (
    <ThemeNameContext.Provider
      value={{
        theme,
        themeNames,
        setTheme: userSetTheme,
      }}
    >
      <ThemeProvider theme={themeMap[theme]}>{children}</ThemeProvider>
    </ThemeNameContext.Provider>
  );
}

/**
 * Wrapper for subthemes.
 * Copies all simple (string) properties from the parent object into the child object
 * Allows easy cascading to minimize the amount of colors that need to manually be set
 *
 * @param name {string} The name of the subtheme to use as an override
 * @param children Child react nodes
 * @constructor
 */
function SubTheme({ name, children }) {
  const cascadeTheme = (outerTheme) => {
    const newTheme = {};
    // copy simple string properties
    for (const [key, value] of Object.entries(outerTheme)) {
      if (typeof value === "string") {
        newTheme[key] = value;
      }
    }
    // then copy the contents of the subtheme, overwriting anything set by the base theme
    // this will preserve child objects so this wrapper can be nested
    if (Object.hasOwn(outerTheme, name)) {
      Object.assign(newTheme, outerTheme[name]);
    } else {
      console.warn(`Group ${name} does not exist on theme ${outerTheme.name}`);
    }
    return newTheme;
  };

  // use a function to get around the default styled-components copy-to-child
  //  if we manually set the object, styled-components would spread the parent
  //  theme with the child theme, meaning that all top-level props are copied down too
  return <ThemeProvider theme={cascadeTheme}>{children}</ThemeProvider>;
}

export { ThemeNameContext, Theme, SubTheme };
