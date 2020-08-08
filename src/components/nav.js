import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 2vh 5vw 2vh 5vw;
    background-color: white;
    top: 0;
    left: 0;
    box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    @media (max-width: 850px) {
        background: none;
        box-shadow: none;
    }
`;

const Header = styled.header`
    padding 0 10vw 0 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Maragsa";
    font-size: 24px;
    a {
        text-decoration: none;
        color: white;
    }
    ul {
        padding: 0 2vw 0 2vw;
        margin: 1vh 0 1vh 0;
        list-style: none;
    }
    li {
        color: black;
        cursor: pointer;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 850px) {

        background-color:black;
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
        li{
            color:white;
        }
    }
`;

const Hamburger = styled.div`
    display: none;
    @media (max-width: 850px) {
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
            background-color: ${({ state }) => (state ? "white" : "#3C556E")};
        }
    }
`;

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function Nav() {
    const [state, setState] = useState(false);
    return (
        <NavBar>
            <Hamburger state={state} onClick={() => setState(!state)}>
                <div />
                <div />
                <br />
            </Hamburger>
            <Header state={state}>
                <ul>
                    <Link to="/">
                        <li>Check Country </li>
                    </Link>
                </ul>
                <ul onClick={handleClick}>
                    <li>Home </li>
                </ul>
            </Header>
        </NavBar>
    );
}
export default Nav;
