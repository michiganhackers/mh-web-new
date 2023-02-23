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
    white: "#fff",
    black: "#000",
    offBlack: "#212529",
};

/**
 *  Light (default) theme for the website
 *
 *  A theme has the 'default' section, which defines the colors to be used in absence of an override.
 *  The other sections are nested into each other based on component nesting.
 *  SVGs with several colors should be a subgroup with an ordered list of colors
 *
 */
export const lightTheme = {
    // default colors for this theme
    //  all unset values in subgroups will default to these
    default: {
        background: lightColors.white,
        text: lightColors.black,
        heading: lightColors.black,
        link: lightColors.secondaryBright,
        icon: lightColors.black,
    },

    home: {
        text: lightColors.white,
        link: lightColors.white,
        icon: lightColors.white,
    },

    navbar: {
        text: lightColors.white,
        link: lightColors.white,
        linkActive: lightColors.offBlack,
        linkHover: lightColors.secondary,
    },

    about: {
        svg: {
            headingBackground: lightColors.primaryLight,
        },
        mission: {
            heading: lightColors.white,
            text: lightColors.white,
        },

        sponsor: {
            background: lightColors.secondary,
            border: lightColors.white,
        },
    },

    leadership: {
        text: lightColors.white,
        icon: lightColors.white,

        tab: {
            backgroundActive: lightColors.primaryLight,
            backgroundHidden: lightColors.secondaryLight,
        },

        lead: {
            background: lightColors.primary,
        },
    },

    teams: {
        background1: lightColors.primaryLight,
        background2: lightColors.secondaryLight,
        text: lightColors.white,
        sidebar: {
            background: lightColors.gray,
            heading: lightColors.offBlack,
            text: lightColors.black,
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
            text: lightColors.white,
        },
    },

    faq: {
        text: lightColors.black,
        // icon showing open state of question
        opener: lightColors.primary,
        border: lightColors.black,
    },
};
