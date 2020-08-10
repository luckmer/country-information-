import React, { useContext, useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Div, Search, Cards } from "../styles/CountryCss";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Countries() {
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const dataContext = useContext(DataContext);
    const { state } = dataContext;
    const content = state.countries;

    useEffect(() => {
        const filter = content.filter((state) => {
            return state.name.toLowerCase().includes(find.toLocaleLowerCase());
        });
        setFilteredData(filter);
    }, [find, content, setFilteredData]);
    const transition = {
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9],
    };
    return (
        <Div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1, ...transition },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 1, ...transition },
            }}
        >
            <motion.div style={{ opacity: opacity }}>
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
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1.1 }}
                                key={i}
                                style={{ padding: "2em" }}
                            >
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
                            </motion.div>
                        )
                    )}
                </Cards>
            </motion.div>
        </Div>
    );
}
