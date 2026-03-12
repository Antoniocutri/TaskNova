import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { useLoaderData } from "react-router-dom";

function Homepage() {

    const data = useLoaderData()
    console.log(data)
    
    return(
        <>

        </>
    )
}

export default Homepage;