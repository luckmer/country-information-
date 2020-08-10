import styled from "styled-components";
import { background, color } from "./Box";
export const NavBar = styled.nav`
    background: ${background};
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 2vh 5vw 2vh 5vw;
    top: 0;
    left: 0;
    box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 850px) {
        background: none;
        box-shadow: none;
    }
`;
export const Header = styled.header`
    background: ${background};
    padding 0 10vw 0 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Maragsa";
    font-size: 24px;
    a {
        color: ${color};
        text-decoration: none;
    }
    ul {
        padding: 0 2vw 0 2vw;
        margin: 1vh 0 1vh 0;
        list-style: none;
    }
    button{
        color: ${color};
        border:none;
        background:none;
    }
    li {
        color: ${color};
        cursor: pointer;
        justify-content: center;
        font-weight: bold;
    }
    @media screen and (max-width: 850px) {
        padding: 7vh 2vw 7vh 3vw;
        align-items: center;
        flex-flow: column nowrap;
        position: fixed;
        color: white;
        transform: ${({ state }) =>
            state ? "translateY(0)" : "translateY(-100%)"};
        top: 0;
        right: 0;
        width: 40vw;
        transition: transform 0.3s ease-in-out;
    
    }
`;
export const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        width: 2rem;
        height: 3rem;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 999;
        div {
            width: 5vw;
            height: 2px;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 1s ease;
            background-color: ${({ state }) => (state ? "white" : " blue")};
        }
    }
`;
