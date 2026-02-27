import { createBrowserRouter } from "react-router";
import Navbar from "../components/layoutComponents/navbar";
import Homepage from "../views/homepage";
import Layout from "../components/layouts/Layout";
import routes from "./routes";
import LoginPage from "../views/auth/LoginPage";
import RegisterPage from "../views/auth/RegisterPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
                {
                    path: routes.home,
                    Component: Homepage
            }
        ]
    },
    {
        path: "/auth",
        children:[
            {
                path: routes.register,
                Component: RegisterPage,
            },
            {
                path: routes.login,
                Component: LoginPage,
            }
        ]
    },
    
])

export default router;