import React from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";
import api from "../axios/api";



function Homepage() {
    const {
        handleSubmit,
    } = useForm({});

    const navigate = useNavigate()

    const onSubmit = async () =>{
        await api.get("/sanctum/csrf-cookie");

        await api.post("/logout");

        console.log('logout')

        navigate('/')
        console.log('cisojhsfii')
    };

    return(
        <>
            <button className="btn btn-primary" onClick={() => navigate(routes.login)}>Homepage</button>
            <button className="btn btn-secondary" onClick={() => navigate(routes.register)}>registarti</button>

            <form className="btn btn-error" onSubmit={handleSubmit(onSubmit)}>Logout</form>
        </>
    )
}

export default Homepage;