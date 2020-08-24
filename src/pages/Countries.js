import React, { useContext, useState, useEffect } from "react";
import { Div, Search, Cards } from "../styles/CountryCss";
import { AnimDiv } from "../animations/CountryAnim";
import Paginating from "../components/Pagination";
import { DataContext } from "../data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountryContent from "../components/CountryContent";
function Countries() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(50);
    const [find, setFind] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const { currentPost, paginate } = PageControl();
    const { state } = useContext(DataContext);
    const content = state.countries;

    useEffect(() => {
        const filter = content.filter((state) => {
            return state.name.toLowerCase().includes(find.toLocaleLowerCase());
        });
        setFilteredData(filter);
    }, [find, content, setFilteredData]);

    return (
        <Div initial="initial" animate="animate" exit="exit" variants={AnimDiv}>
            <motion.div>
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
                <Paginating
                    postPerPage={postPerPage}
                    totalPosts={filteredData.length}
                    paginate={paginate}
                />
                <Cards>
                    {currentPost.map(
                        ({ name, population, flag, capital }, i) => (
                            <motion.div whileHover={{ scale: 1.1 }} key={i}>
                                <Link to={`/${name}`}>
                                    <CountryContent
                                        population={population}
                                        flag={flag}
                                        capital={capital}
                                    />
                                </Link>
                            </motion.div>
                        )
                    )}
                </Cards>
            </motion.div>
        </Div>
    );

    function PageControl() {
        const LastPost = currentPage * postPerPage;
        const FirstPost = LastPost - postPerPage;
        const currentPost = filteredData.slice(FirstPost, LastPost);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        return { currentPost, paginate };
    }
}
export default Countries;
