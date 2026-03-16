import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import routes from "../router/routes";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(UserContext);

    // If not authenticated redirect to login page
    if (!user) {
        return <Navigate to={routes.login} replace />;
    }

    return <Outlet/>;
}