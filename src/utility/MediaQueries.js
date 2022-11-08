import { css } from "styled-components";

export default {
    tiny: (...args) =>
        css`
            @media (max-width: 390px) {
                ${css(...args)};
            }
        `,
    small: (...args) =>
        css`
            @media (max-width: 480px) {
                ${css(...args)};
            }
        `,
    tablet: (...args) =>
        css`
            @media (max-width: 768px) {
                ${css(...args)};
            }
        `,
    desktop: (...args) =>
        css`
            @media (max-width: 992px) {
                ${css(...args)};
            }
        `,
    giant: (...args) =>
        css`
            @media (max-width: 1200px) {
                ${css(...args)};
            }
        `,
    massive: (...args) =>
        css`
            @media (max-width: 1500px) {
                ${css(...args)};
            }
        `
};
