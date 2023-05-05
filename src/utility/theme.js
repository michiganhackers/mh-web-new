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
    nameIcon: "sun",
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
        geometry: {
            ambient: "rgb(255, 140, 0)",
            diffuse: "rgb(255, 255, 0)",
            background: "rgb(255, 0, 0)",
        }
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

    footer: {
        background: lightColors.hackerOrange,
        text: lightColors.white,
        icon: lightColors.white,
        iconHover: lightColors.gray,
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

        mailing: {
            text: lightColors.black,
            textAlt: lightColors.white,
            background: lightColors.white,
            backgroundAlt: lightColors.primaryLight,
            backgroundAltHover: lightColors.primaryDark,
            border: lightColors.black,
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
        heading: lightColors.primaryDark,
        calendar: {
            heading: lightColors.black,
            text: lightColors.white,
            background: lightColors.primaryDark,
        },
    },

    contact: {
        links: {
            background: lightColors.secondaryBright,
            heading: lightColors.white,
            text: lightColors.white,
            icon: lightColors.white,
            iconHover: lightColors.offBlack,

            mailing: {
                text: lightColors.black,
                textAlt: lightColors.white,
                background: lightColors.white,
                backgroundAlt: lightColors.primaryLight,
                backgroundAltHover: lightColors.primaryDark,
                border: lightColors.black,
            },
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
        heading: lightColors.primaryDark,
        question: {
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
    },

    pageNotFound: {
        textAlt: lightColors.primaryDark,
        heading: lightColors.primaryDark,
    }
};

const darkColors = {
    hackerOrange: "#c74421",
    primary: "#c74421",

    primaryDark: "#9b341a",
    primaryDarker: "#852d15",

    primaryLight: "#c75739",
    primaryLighter: "#d06448",
    primaryLightest: "#d36e53",
    primaryPale: "#c58978",

    secondary: "#174e75",
    secondaryBright: "#307aa8",
    secondaryLight: "#406388",
    secondaryLighter: "#7093be",

    gray: "#595959",
    lightGray: "#7c7c7c",
    darkGray: "#3b3b3b",
    white: "#fff",
    black: "#000",
    offBlack: "#252020",
};

/**
 *  Dark theme for the website (WIP)
 *
 *  @implements ThemeData
 */
export const darkTheme = {
    name: "dark",
    nameIcon: "moon",
    background: darkColors.offBlack,
    text: darkColors.white,
    heading: darkColors.white,
    link: darkColors.secondaryBright,
    icon: darkColors.white,

    home: {
        heading: darkColors.white,
        text: darkColors.white,
        link: darkColors.white,
        linkHover: darkColors.offBlack,
        linkActive: darkColors.offBlack,
        icon: darkColors.white,
        geometry: {
            ambient: "rgb(66,37,0)",
            diffuse: "rgb(168,168,4)",
            background: "rgb(140,4,4)",
        }
    },

    navbar: {
        background: darkColors.hackerOrange,
        text: darkColors.white,
        link: darkColors.white,
        logo: darkColors.white,
        logoHover: darkColors.offBlack,
        linkActive: darkColors.offBlack,
        linkHover: darkColors.offBlack,
        border: darkColors.white,
    },

    footer: {
        background: darkColors.hackerOrange,
        iconHover: lightColors.gray,
    },

    about: {
        mission: {
            heading: darkColors.white,
            text: darkColors.white,
            background: darkColors.secondary,
            backgroundAlt: darkColors.primaryLightest,
            svg: {
                headingBackground: darkColors.secondary,
                background2: darkColors.primaryLight,
                background3: darkColors.primaryDarker,
                background4: darkColors.primaryDark,
                background5: darkColors.primaryLightest,
            },
        },

        mailing: {
            text: darkColors.white,
            textAlt: darkColors.white,
            background: darkColors.black,
            backgroundAlt: darkColors.primaryLight,
            backgroundAltHover: darkColors.primaryDark,
            border: darkColors.white,
        },

        sponsors: {
            background: darkColors.secondary,
            backgroundAlt: "#c3d1d7",
            border: darkColors.white,
        },
    },

    leadership: {
        heading: darkColors.white,
        text: darkColors.white,

        tab: {
            background: darkColors.primaryLight,
            backgroundAlt: darkColors.secondary,
        },

        leads: {
            icon: darkColors.white,
            background: darkColors.primaryLight,
            linkHover: darkColors.offBlack,
            border: darkColors.white,
        },
    },

    teams: {
        icon: darkColors.white,
        backToTop: {
            background: darkColors.primaryLight,
        },
        cards: {
            heading: darkColors.white,
            text: darkColors.white,
            link: darkColors.offBlack,
            background: darkColors.primaryLight,
            backgroundAlt: darkColors.secondaryLight,
        },
        sidebar: {
            background: darkColors.darkGray,
            heading: darkColors.white,
            link: darkColors.white,
            linkHover: darkColors.white,
            backgroundHover: darkColors.lightGray,
        },
    },

    events: {
        heading: darkColors.primaryDark,
        calendar: {
            heading: darkColors.black,
            text: darkColors.white,
            background: darkColors.primaryDark,
        },
    },

    contact: {
        links: {
            background: darkColors.secondaryBright,
            heading: darkColors.white,
            text: darkColors.white,
            icon: darkColors.white,
            iconHover: darkColors.offBlack,

            mailing: {
                text: darkColors.white,
                textAlt: darkColors.white,
                background: darkColors.black,
                backgroundAlt: darkColors.primaryLight,
                backgroundAltHover: darkColors.primary,
                border: darkColors.white,
            },
        },
        details: {
            heading: darkColors.white,
            svg: {
                icon: darkColors.white,
                background1: darkColors.primaryLightest,
                background2: darkColors.secondaryLight,
                background3: darkColors.primaryDark,
                background4: darkColors.primary,

                background5: darkColors.secondaryLight,
                background6: darkColors.primaryLightest,
                background7: darkColors.primary,
                background8: darkColors.secondaryBright,
            },
        },
    },

    faq: {
        heading: darkColors.primaryDark,
        question: {
            heading: darkColors.white,
            text: darkColors.white,
            // icon showing open state of question
            svg: {
                background: darkColors.primaryDark,
                icon: darkColors.white,
            },
            opener: darkColors.primary,
            border: darkColors.white,
        },
    },

    pageNotFound: {
        textAlt: darkColors.primaryDark,
        heading: darkColors.primaryDark,
    }
};
