import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { routes } from "./routes";
import DataContext from "./data/Data";
import Nav from "./components/nav";
import Box from "./styles/Box";
function App() {
    const location = useLocation();
    const [type, setType] = useState({
        mode: "light",
    });
    const Color = type.mode;

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("color"));
        if (store) setType(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("color", JSON.stringify(type));
    }, [type]);

    const toggleChange = () => {
        setType({ mode: Color === "light" ? "dark" : "light" });
    };

    return (
        <ThemeProvider theme={{ mode: Color }}>
            <Box>
                <Nav type={Color} toggleChange={toggleChange} />
                <DataContext>
                    <AnimatePresence initial={false} exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            {routes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    exact
                                    path={path}
                                    component={Component}
                                />
                            ))}
                        </Switch>
                    </AnimatePresence>
                </DataContext>
            </Box>
        </ThemeProvider>
    );
}

export default App;
