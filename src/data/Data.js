import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();
const url = `https://restcountries.eu/rest/v2/all`;

function Data(props) {
    const [state, setState] = useState({ countries: [] });

    useEffect(() => {
        axios.get(url).then((res) => {
            const countries = res.data;
            setState({ countries });
        });
    }, []);

    return (
        <DataContext.Provider value={{ state, setState }}>
            {props.children}
        </DataContext.Provider>
    );
}
export default Data;
