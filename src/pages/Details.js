import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/Data";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.section`
    padding: 15vh 5vw 2vh 5vw;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-rows: auto;
    grid-template-areas:
        " back . . .  . . "
        " content content content content  image image  "
        " content content content content . .   "
        " . . . . . .   ";
`;

const Img = styled.div`
    grid-area: image;
    border-radius: 5px;
    img {
        width: 250px;
        height: 167px;
        box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    }
`;
const Content = styled.div`
    grid-area: content;
    padding: 0 2vw 0 2vw;
    header {
        display: flex;
        justify-content: flex-end;
    }
`;

const Exit = styled.section`
    grid-area: back;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border: none;
        background-color: #fff;
    }
`;

const Div = styled.div``;

function Details(props) {
    const [state, setState] = useState({ name: [] });
    const contextType = useContext(DataContext);
    const content = state.name;
    console.log(content);
    useEffect(() => {
        const projectID = contextType.state.countries.filter(
            (el) => el.country === props.match.params.id
        );
        setState({ name: projectID });
    }, [contextType.state.countries, props.match.params.id]);

    return (
        <div>
            {content.map(
                ({ countryInfo, continent, population, country }, i) => (
                    <Container key={i}>
                        <Img>
                            <img src={countryInfo.flag} alt="" />
                        </Img>
                        <Content>
                            <header>
                                <h4> {country}</h4>
                            </header>
                            <div>
                                <ul>
                                    <li> Population : {population}</li>
                                    <li> continent :{continent}</li>
                                </ul>
                            </div>
                        </Content>
                        <Exit>
                            <Div>
                                <button>
                                    <Link to="/">Back</Link>
                                </button>
                            </Div>
                        </Exit>
                    </Container>
                )
            )}
        </div>
    );
}

export default Details;
