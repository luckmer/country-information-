import { useEffect } from "react";

export default function CountryFilter(content, find, setFilteredData) {
    useEffect(() => {
        const filter = content.filter((state) => {
            return state.country
                .toLowerCase()
                .includes(find.toLocaleLowerCase());
        });
        setFilteredData(filter);
    }, [find, content, setFilteredData]);
}
