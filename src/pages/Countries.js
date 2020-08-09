import React, { useContext, useState } from "react";
import { background, color, border } from "../styles/Box";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import CountryFilter from "../components/CountryFilter";

const Div = styled.div`
    display: flex;
    flex-flow: row;
    padding: 15vh 5vw 15vh 5vw;
`;
const Cards = styled.section`
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
const Search = styled.section`
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

export default function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const dataContext = useContext(DataContext);
    const { state } = dataContext;
    const content = state.countries;

    CountryFilter(content, find, setFilteredData);

    return (
        <Div>
            <div>
                <Search>
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={find}
                            onChange={(e) => setFind(e.target.value)}
                        />
                    </div>
                </Search>
                <Cards>
                    {filteredData.map(
                        (
                            { country, continent, population, countryInfo },
                            i
                        ) => (
                            <div key={i} style={{ padding: "2em" }}>
                                <Link to={`/${country}`}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img
                                            src={countryInfo.flag}
                                            variant="top"
                                        />
                                        <Card.Body>
                                            <Card.Title>{country}</Card.Title>
                                            <Card.Text>
                                                continent {continent}
                                            </Card.Text>
                                            <Card.Text>
                                                population : {population}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    )}
                </Cards>
            </div>
        </Div>
    );
}
