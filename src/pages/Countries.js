import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { background, color, border } from "../styles/Box";
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
    div {
    }
`;
const Search = styled.section`
    padding: 2vh 0 2vh 0;
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    input {
        border: none;
        background-color: ${background};
        border-bottom: 1px solid ${border};
        color: ${color};
    }
`;
function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const dataContext = useContext(DataContext);
    const { state } = dataContext;
    const content = state.countries;

    useEffect(() => {
        const filter = content.filter((state) => {
            return state.country
                .toLowerCase()
                .includes(find.toLocaleLowerCase());
        });
        setFilteredData(filter);
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
                            <Link to={`/${r.country}`}>
                                <Card style={{ width: "22rem" }}>
                                    <Card.Img
                                        src={r.countryInfo.flag}
                                        variant="top"
                                    />
                                    <Card.Body>
                                        <Card.Title>{r.country}</Card.Title>
                                        <Card.Text>
                                            continent {r.continent}
                                        </Card.Text>
                                        <Card.Text>
                                            population : {r.population}
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
