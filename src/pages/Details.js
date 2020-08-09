import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import {
    Container,
    Img,
    Content,
    Ul,
    Languages,
    Exit,
} from "../styles/DetailCss";

export default function Details(props) {
    const [state, setState] = useState({ content: [] });
    const contextType = useContext(DataContext);
    const content = state.content;

    useEffect(() => {
        const projectID = contextType.state.countries.filter(
            (el) => el.name === props.match.params.id
        );
        setState({ content: projectID });
    }, [contextType.state.countries, props.match.params.id]);

    return (
        <>
            {content.map((i, j) => (
                <Container key={j}>
                    <Img>
                        <img src={i.flag} alt="" />
                    </Img>
                    <Content>
                        <header>
                            <h4>{i.name}</h4>
                        </header>
                        <div>
                            <Ul>
                                <li>
                                    Population :<span>{i.population}</span>
                                </li>
                                <li>
                                    region <span> {i.region} </span>
                                </li>
                                <li>
                                    Sub region <span> {i.nativeName}</span>
                                </li>
                                <li>
                                    Capital <span> {i.capital}</span>
                                </li>
                            </Ul>
                        </div>
                        <Languages>
                            <header>
                                <p>languages</p>
                            </header>
                            <div>
                                {i.languages.map((content, k) => (
                                    <div key={k}>
                                        <ul>
                                            <h6>{content.nativeName}</h6>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Languages>
                    </Content>
                    <Exit>
                        <button>
                            <Link to="/">Back</Link>
                        </button>
                    </Exit>
                </Container>
            ))}
        </>
    );
}
