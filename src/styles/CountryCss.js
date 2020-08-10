import { background, color, border } from "./Box";
import { motion } from "framer-motion";
import styled from "styled-components";
export const Div = styled(motion.div)`
    display: flex;
    flex-flow: row;
    padding: 15vh 5vw 15vh 5vw;
`;
export const Cards = styled(motion.section)`
    padding: 2em 0 0 0;
    background: none;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style: none;
    a {
        text-decoration: none;
        color: ${color};
    }
`;
export const Search = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    input {
        border: none;
        background-color: ${background};
        border-bottom: 1px solid ${border};
        color: ${color};
    }
    @media screen and (max-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            border: none;
            background-color: ${background};
            border-bottom: 1px solid ${border};
            color: ${color};
        }
    }
`;
