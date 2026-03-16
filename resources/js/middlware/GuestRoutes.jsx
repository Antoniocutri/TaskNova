import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import routes from "../router/routes";

export default function GuestRoute({ children }) {
    const { user} = useContext(UserContext);        

    // If authenticated redirect to homepage
    if (user) {
        return <Navigate to={routes.home} replace />;
    }

    return <Outlet/>;
}