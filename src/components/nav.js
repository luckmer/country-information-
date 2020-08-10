import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, Hamburger, Header } from "../styles/NavBar";

function Nav(props) {
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);

    window.addEventListener("scroll", () => {
        window.pageYOffset > 400 ? setScroll(true) : setScroll("");
    });

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
                <ul>
                    <button onClick={props.toggleChange}>
                        <li>dark</li>
                    </button>
                </ul>
                <ul>
                    <li
                        scroll={scroll}
                        onClick={handleClick}
                        style={{ display: scroll ? "block" : "none" }}
                    >
                        Home
                    </li>
                </ul>
            </Header>
        </NavBar>
    );
}
export default Nav;
