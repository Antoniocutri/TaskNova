import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";



function Homepage() {
    const navigate = useNavigate()
    return(
        <>
            <button className="btn btn-secondary" onClick={() => navigate(routes.login)}>Homepage</button>
            <button className="btn btn-secondary" onClick={() => navigate(routes.register)}>registarti</button>
        </>
    )
}

export default Homepage;