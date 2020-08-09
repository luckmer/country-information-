import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Data from "../data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import styled from "styled-components";

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
    div {
    }
`;
const Search = styled.section`
    padding: 2vh 0 2vh 0;
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    input {
        background: none;
        border: none;
        border-bottom: 1px solid;
    }
`;
function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const dataContext = useContext(Data.DataContext);
    const { state } = dataContext;
    const content = state.countries;

    useEffect(() => {
        setFilteredData(
            content.filter((country) =>
                country.toString().toLowerCase().includes(find)
            )
        );
    }, [find, content]);

    return (
        <Div>
            <div>
                <Search>
                    <input
                        type="text"
                        placeholder="Search"
                        value={find}
                        onChange={(e) => setFind(e.target.value)}
                    />
                </Search>
                <Cards>
                    {filteredData.map((r, i) => (
                        <div key={i} style={{ padding: "2em" }}>
                            <Link
                                to={`/${r.country}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img
                                        src={r.countryInfo.flag}
                                        variant="top"
                                    />
                                    <Card.Body>
                                        <Card.Title>{r.country}</Card.Title>
                                        <Card.Text>
                                            <h6>continent {r.continent}</h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>population : {r.population}</h6>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </Cards>
            </div>
        </Div>
    );
}

export default Countries;
