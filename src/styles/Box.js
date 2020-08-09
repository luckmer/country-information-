import styled from "styled-components";
import theme from "styled-theming";
import colors from "./Colors";
export const background = theme("mode", {
    light: colors.white,
    dark: colors.grayDarker,
});
export const color = theme("mode", {
    light: colors.grayDarker,
    dark: colors.white,
});
export const border = theme("mode", {
    light: colors.grayLight,
    dark: colors.white,
});

const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${background};
    color: ${color};
    transition: all 0.5s linear;
    .card {
        border: none;
        box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    }
    .card-body {
        background-color: ${background};
        border: none;
    }
`;

export default Box;
