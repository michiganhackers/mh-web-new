import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";

/**
 * Context with the current theme name and a function to switch to the next theme
 * @type {React.Context<!{theme: string, cycleTheme: function}>}
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
    // use the first theme as the default
    const [theme, setTheme] = useState(themes[0].name);
    // load the initial value of theme from localstorage
    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme !== theme && Object.hasOwn(themeMap, savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);
    // every time the theme changes, save it to localstorage
    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <ThemeNameContext.Provider
            value={{
                theme,
                cycleTheme: () =>
                    setTheme(
                        (prevTheme) =>
                            themeNames[
                                (themeNames.indexOf(prevTheme) + 1) %
                                    themeNames.length
                            ]
                    ),
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
 * @param name The name of the subtheme to use as an override
 * @param children Child react nodes
 * @constructor
 */
function SubTheme({ name, children }) {
    const theme = useTheme();
    const newTheme = {};
    // copy simple string properties
    for (const [key, value] of Object.entries(theme)) {
        if (typeof value === "string") {
            newTheme[key] = value;
        }
    }
    // then copy the contents of the subtheme, overwriting anything set by the base theme
    // this will preserve child objects so this wrapper can be used multiple times
    if (Object.hasOwn(theme, name)) {
        Object.assign(newTheme, theme[name]);
    } else {
        console.warn(`Group ${name} does not exist on theme ${theme.name}`);
    }

    return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}

export { ThemeNameContext, Theme, SubTheme };
