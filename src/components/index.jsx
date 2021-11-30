import React from "react";
import Navbar from "./navbar/navbar";
import GoogleSearch from './google-search/google-search.jsx'

function homepage(props) {
    return (
        <>
            <Navbar />
            <GoogleSearch />
        </>
    )
}

export default homepage