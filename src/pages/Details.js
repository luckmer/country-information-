import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/Data";

function Details(props) {
    const [state, setState] = useState({ name: [] });
    const contextType = useContext(DataContext);
    const content = state.name;

    useEffect(() => {
        const projectID = contextType.state.countries.filter(
            (el) => el.country === props.match.params.id
        );
        setState({ name: projectID });
    }, [contextType.state.countries, props.match.params.id]);

    return (
        <section>
            {content.map(({ countryInfo }, i) => (
                <div key={i}>
                    <img src={countryInfo.flag} alt="" />
                </div>
            ))}
        </section>
    );
}

export default Details;
