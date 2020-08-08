import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Data from "../data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const dataContext = useContext(Data.DataContext);
    const { state } = dataContext;
    const content = state.countries;
    console.log(content);
    useEffect(() => {
        setFilteredData(
            content.filter((country) =>
                country.toString().toLowerCase().includes(find)
            )
        );
    }, [find, content]);

    const Div = styled.div`
        padding: 20em 0 0 0;
    `;

    return (
        <Div>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={find}
                    onChange={(e) => setFind(e.target.value)}
                />
            </div>
            <div>
                {filteredData.map((r, i) => (
                    <div key={i}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img src={r.countryInfo.flag} variant="top" />
                            <Card.Body>
                                <Card.Title>{r.country}</Card.Title>
                                <Link to={`/${r.country}`}>
                                    <Button variant="primary">Visit</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Div>
    );
}

export default Countries;
