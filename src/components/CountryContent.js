import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function CountryContent({ population, flag, capital, name }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img src={flag} variant="top" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Capital {capital}</Card.Text>
                <Card.Text>population: {population}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CountryContent;
