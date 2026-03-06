import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import routes from "../router/routes";

export default function GuestRoute({ children }) {
    const { user, loading } = useContext(UserContext);
    const navigate = useNavigate()
        
    if (loading) return null;

    // If authenticated redirect to homepage
    if (user) {
        navigate(routes.home)
    }

    return <Outlet/>;
}