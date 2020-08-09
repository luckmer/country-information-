import styled from "styled-components";
import theme from "styled-theming";
import colors from "./Colors";
export const background = theme("mode", {
    light: colors.white,
    dark: colors.grayDarker,
});

const color = theme("mode", {
    light: colors.grayDarker,
    dark: colors.white,
});
const border = theme("mode", {
    light: colors.grayDarker,
    dark: colors.white,
});

const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${background};
    color: ${color};
    transition: all 0.5s linear;
    a {
        color: ${color};
        text-decoration: none;
    }
    button {
        color: ${color};
    }
    input {
        background-color: ${background};
        border-bottom: 1px solid ${border};
        color: ${color};
    }
    .card-body {
        background-color: ${background};
        color: ${color};
        border: 0.1 solid ${border};
    }
`;

export default Box;
