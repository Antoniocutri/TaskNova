import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";
import { UserContext } from "../context/UserContext";



function Homepage() {
    const {
        handleSubmit,
    } = useForm({});

    const navigate = useNavigate()

    const {user, signOut} = useContext(UserContext)

    const handleLogout = async () =>{

        await signOut();
        navigate(routes.login);
    };

    return(
        <>
            {(!user && (
                <> 
                    <button className="btn btn-primary" onClick={() => navigate(routes.login)}>Homepage</button>
                    <button className="btn btn-secondary" onClick={() => navigate(routes.register)}>registarti</button>
                </>
            )) || (
                <>
                    <form  onSubmit={handleSubmit(handleLogout)}>
                        <button className="btn btn-error">Logout</button>
                    </form>
                </>
            )}
        </>
    )
}

export default Homepage;