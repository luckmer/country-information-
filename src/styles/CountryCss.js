import { background, color, border } from "./Box";
import { motion } from "framer-motion";
import styled from "styled-components";
export const Div = styled(motion.div)`
    display: flex;
    flex-flow: row;
    padding: 15vh 5vw 15vh 5vw;
`;
export const Cards = styled(motion.section)`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 60px;
    list-style: none;
    a {
        text-decoration: none;
        color: ${color};
    }
`;
export const Search = styled.section`
    padding: 2vh 0 2vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    input {
        border: none;
        background-color: ${background};
        border-bottom: 1px solid ${border};
        color: ${color};
    }
`;
