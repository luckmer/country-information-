import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import DataContext from "./data/Data";
import Nav from "./components/nav";
function App() {
    const location = useLocation();
    return (
        <>
            <Nav />
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
        </>
    );
}

export default App;
