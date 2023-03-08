const hackerOrange = "#f15d24";

const lightColors = {
    hackerOrange,
    primary: "#ff774a",

    primaryDark: "#ee5f30",
    primaryDarker: "#c74421",

    primaryLight: "#ed8246",
    primaryLighter: "#f18048",
    primaryLightest: "#f38a63",
    primaryPale: "#ffaf92",

    secondary: "#8dcadf",
    secondaryBright: "#59caf1",
    secondaryLight: "#a9d2de",
    secondaryLighter: "#c8e4dd",

    gray: "#d9d9d9",
    lightGray: "#eee",
    white: "#fff",
    black: "#000",
    offBlack: "#212529",
};

/**
 *  Light (default) theme for the website
 *
 *  A theme is a collection of nested objects with names mapping to color values
 *  Properties are implicitly copied from a parent into child objects
 *      This includes the top level properties `name`, `text`, `background`, etc.
 *      Those top-level properties are the defaults for all subthemes
 *  SVGs with several colors should be a subgroup with an ordered list of colors
 *
 *  @typedef ThemeData
 *  @type {Object}
 *  @property {string} name The name of the theme. Must be unique among themes
 *
 */
export const lightTheme = {
    // default colors for this theme
    //  all unset values in subgroups will default to these
    name: "light",
    background: lightColors.white,
    text: lightColors.black,
    heading: lightColors.black,
    link: lightColors.secondaryBright,
    icon: lightColors.black,

    home: {
        heading: lightColors.white,
        text: lightColors.white,
        link: lightColors.white,
        linkHover: lightColors.offBlack,
        linkActive: lightColors.offBlack,
        icon: lightColors.white,
    },

    navbar: {
        background: lightColors.hackerOrange,
        text: lightColors.white,
        link: lightColors.white,
        logo: lightColors.white,
        logoHover: lightColors.offBlack,
        linkActive: lightColors.offBlack,
        linkHover: lightColors.offBlack,
        border: lightColors.white,
    },

    about: {
        mission: {
            heading: lightColors.white,
            text: lightColors.white,
            background: lightColors.secondary,
            backgroundAlt: lightColors.primaryLightest,
            svg: {
                headingBackground: lightColors.secondary,
                background2: lightColors.primaryLight,
                background3: lightColors.primaryDarker,
                background4: lightColors.primaryDark,
                background5: lightColors.primaryLightest,
            },
        },

        sponsors: {
            background: lightColors.secondary,
            border: lightColors.white,
        },
    },

    leadership: {
        heading: lightColors.white,
        text: lightColors.white,

        tab: {
            background: lightColors.primaryLight,
            backgroundAlt: lightColors.secondary,
        },

        leads: {
            icon: lightColors.white,
            background: lightColors.primaryLight,
            linkHover: lightColors.offBlack,
            border: lightColors.white,
        },
    },

    teams: {
        icon: lightColors.white,
        backToTop: {
            background: lightColors.primaryLight,
        },
        cards: {
            heading: lightColors.white,
            text: lightColors.white,
            link: lightColors.offBlack,
            background: lightColors.primaryLight,
            backgroundAlt: lightColors.secondaryLight,
        },
        sidebar: {
            background: lightColors.lightGray,
            heading: lightColors.black,
            link: lightColors.black,
            linkHover: lightColors.gray,
            backgroundHover: lightColors.gray,
        },
    },

    events: {
        heading: lightColors.primary,
        calendar: {
            heading: lightColors.black,
        },
    },

    contact: {
        links: {
            background: lightColors.secondaryBright,
            heading: lightColors.white,
            text: lightColors.white,
            icon: lightColors.white,
            iconHover: lightColors.offBlack,
        },
        details: {
            heading: lightColors.white,
            svg: {
                icon: lightColors.white,
                background1: lightColors.primaryLightest,
                background2: lightColors.secondaryLight,
                background3: lightColors.primaryDark,
                background4: lightColors.primary,

                background5: lightColors.secondaryLight,
                background6: lightColors.primaryLightest,
                background7: lightColors.primary,
                background8: lightColors.secondaryBright,
            },
        },
    },

    faq: {
        heading: lightColors.black,
        text: lightColors.black,
        // icon showing open state of question
        svg: {
            background: lightColors.primaryDark,
            icon: lightColors.white,
        },
        opener: lightColors.primary,
        border: lightColors.offBlack,
    },
};

const darkColors = {
    hackerOrange,
    primary: "#ff774a",

    primaryDark: "#ee5f30",
    primaryDarker: "#c74421",

    primaryLight: "#ed8246",
    primaryLighter: "#f18048",
    primaryLightest: "#f38a63",
    primaryPale: "#ffaf92",

    secondary: "#8dcadf",
    secondaryBright: "#59caf1",
    secondaryLight: "#a9d2de",
    secondaryLighter: "#c8e4dd",

    gray: "#d9d9d9",
    white: "#fff",
    black: "#000",
    offBlack: "#212529",
};

/**
 *  Dark theme for the website (WIP)
 *
 *  @implements ThemeData
 */
export const darkTheme = {
    name: "dark",
    background: darkColors.black,
    text: darkColors.white,
    heading: darkColors.white,
    link: darkColors.secondaryBright,
    icon: darkColors.white,

    home: {
        text: darkColors.white,
        link: darkColors.white,
        icon: darkColors.white,
    },

    navbar: {
        text: darkColors.white,
        link: darkColors.white,
        linkActive: darkColors.offBlack,
        linkHover: darkColors.secondary,
    },

    about: {
        svg: {
            headingBackground: darkColors.primaryLight,
        },
        mission: {
            heading: darkColors.white,
            text: darkColors.white,
        },

        sponsors: {
            background: darkColors.secondary,
            border: darkColors.white,
        },
    },

    leadership: {
        text: darkColors.white,
        icon: darkColors.white,

        tab: {
            backgroundActive: darkColors.primaryLight,
            backgroundHidden: darkColors.secondaryLight,
        },

        lead: {
            background: darkColors.primary,
        },
    },

    teams: {
        background1: darkColors.primaryLight,
        background2: darkColors.secondaryLight,
        text: darkColors.white,
        sidebar: {
            background: darkColors.gray,
            heading: darkColors.offBlack,
            text: darkColors.black,
        },
    },

    events: {
        heading: darkColors.primary,
        calendar: {
            heading: darkColors.black,
        },
    },

    contact: {
        links: {
            background: darkColors.secondaryBright,
            text: darkColors.white,
        },
    },

    faq: {
        text: darkColors.black,
        // icon showing open state of question
        opener: darkColors.primary,
        border: darkColors.black,
    },
};
