import styled from "styled-components";
import { color, background } from "../styles/Box";
import { motion } from "framer-motion";
export const Container = styled.section`
    padding: 15vh 5vw 2vh 5vw;
    width: 100%;
    height: 100vh;
    display: grid;
    background: ${background};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-rows: auto;
    grid-template-areas:
        " back . . .  . . "
        " content content content content  image image  "
        " content content content content image image   "
        " . . . . . .   ";
    @media (max-width: 850px) {
        overflow: hidden;

        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "back . . . "
            " . image image . "
            " content content content  content "
            " content content content  content ";
    }
`;
export const Image = styled(motion.div)`
    grid-area: image;
    border-radius: 5px;
    img {
        width: 100%;
        box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 850px) {
        padding: 2vh 0 0 0;
        grid-area: image;
    }
`;
export const Content = styled.div`
    grid-area: content;
    padding: 0 2vw 0 2vw;
    header {
        font-family: "Maragsa";
        font-weight: bold;
        display: flex;
        justify-content: flex-end;
    }
    @media screen and (max-width: 850px) {
        header {
            justify-content: center;
        }
        display: content;
    }
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: flex-end;
    list-style: none;
    padding: 20px 20px 20px 20px;
    span {
        opacity: 0.7;
    }
    @media (max-width: 850px) {
        align-items: center;
        display: content;
    }
`;
export const Exit = styled.section`
    grid-area: back;
    display: flex;
    justify-content: center;
    align-items: flex;
    button {
        text-decoration: none;
        font-size: 1.5rem;
        border: none;
        background: none;
    }
    a {
        color: ${color};
    }
`;
export const Languages = styled.section`
    font-size: 1.5rem;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        margin: 2vh 3vw 2vh 3vw;
    }
    header {
        align-items: center;
        justify-content: center;
    }
`;
