import React from "react";
import styled from "styled-components";
import { color } from "../styles/Box";
const Ul = styled.ul`
    display: flex;
    button {
        color: ${color};
        background: none;
        padding: 10px;
        margin: 0 0 0 2vw;
    }
`;

function Paginating({ postPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Ul>
            {pageNumbers.map((number) => (
                <div onClick={() => paginate(number)} key={number}>
                    <button>{number}</button>
                </div>
            ))}
        </Ul>
    );
}

export default Paginating;
