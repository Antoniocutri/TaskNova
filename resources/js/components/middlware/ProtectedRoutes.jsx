import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import routes from "../../router/routes";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(UserContext);
    const navigate = useNavigate()

    if (loading) return <p>Loading...</p>;

    // If not authenticated redirect to login page
    if (!user) {
        navigate(routes.login)
    }

    return <Outlet/>;
}