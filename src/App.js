import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import DataContext from "./data/Data";
import Nav from "./components/nav";
import { ThemeProvider } from "styled-components";
import Box from "./styles/Box";
function App() {
    const location = useLocation();
    const [type, setType] = useState({
        mode: "light",
    });
    const Color = type.mode;
    useEffect(() => {
        localStorage.setItem("color", JSON.stringify(type));
    }, [type]);
    localStorage.getItem("color");

    const toggleChange = () => {
        setType({ mode: Color === "light" ? "dark" : "light" });
    };

    return (
        <ThemeProvider theme={{ mode: Color }}>
            <Box>
                <Nav type={Color} toggleChange={toggleChange} />
                <DataContext>
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
                </DataContext>
            </Box>
        </ThemeProvider>
    );
}

export default App;
