import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Container,
    Image,
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
    const transition = {
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9],
    };

    const fadeIn = {
        initial: { x: "-100vw" },
        animate: {
            x: 0,
            transition: { duration: 1, ...transition },
        },
        exit: {
            x: "-100vw",
            transition: { duration: 1, ...transition },
            opacity: 0,
        },
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {content.map((i, j) => (
                <Container key={j}>
                    <Image>
                        <img src={i.flag} alt="" />
                    </Image>
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
        </motion.div>
    );
}
