import React, { useContext, useState, useEffect } from "react";
import { Div, Search, Cards } from "../styles/CountryCss";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const dataContext = useContext(DataContext);
    const { state } = dataContext;
    const content = state.countries;

    useEffect(() => {
        const filter = content.filter((state) => {
            return state.name.toLowerCase().includes(find.toLocaleLowerCase());
        });
        setFilteredData(filter);
    }, [find, content, setFilteredData]);

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
                        ({ name, population, flag, capital }, i) => (
                            <div key={i} style={{ padding: "2em" }}>
                                <Link to={`/${name}`}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img src={flag} variant="top" />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                Capital {capital}
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
