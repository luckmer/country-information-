import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = styled.nav`
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    background-color: #eeeeee;
    padding: 2vh 5vw 2vh 5vw;
    box-shadow: 11px 11px 52px -12px rgba(0, 0, 0, 0.29);
    @media (max-width: 850px) {
        background: none;
        box-shadow: none;
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    font-family: "Maragsa";
    font-size: 22px;
    a {
        text-decoration: none;
        color: #222831;
    }
    ul {
        padding: 0 2vw 0 2vw;
        margin: 1vh 0 1vh 0;
        list-style: none;
    }
    li {
        cursor: pointer;
        justify-content: center;
    }

    @media (max-width: 850px) {
        padding: 7vh 2vw 7vh 3vw;
        align-items: center;
        flex-flow: column nowrap;
        background-color: #eeeeee;
        position: fixed;
        color: #222831;
        transform: ${({ state }) =>
            state ? "translateY(0)" : "translateY(-100%)"};
        top: 0;
        right: 0;
        width: 40vw;
        transition: transform 0.3s ease-in-out;
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
        z-index: 99999;
        div {
            width: 5vw;
            height: 2px;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 1s ease;
            background-color: ${({ state }) => (state ? "#cf7500" : "#3C556E")};
        }
    }
`;

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function Nav() {
    const [state, setState] = useState(true);
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
