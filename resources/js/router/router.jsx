import { createBrowserRouter } from "react-router";
import Navbar from "../components/layoutComponents/navbar";
import Homepage from "../views/homepage";
import Layout from "../components/layouts/Layout";
import routes from "./routes";
import LoginPage from "../views/auth/LoginPage";
import RegisterPage from "../views/auth/RegisterPage";
import ProtectedRoute from "../components/middlware/ProtectedRoutes";
import GuestRoute from "../components/middlware/GuestRoutes";
import TasksPage from "../views/TasksPage";
import { getAllTasks } from "./loader";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: routes.home,
                        Component: Homepage
                    },
                    {
                        path: routes.tasks,
                        Component: TasksPage,
                        loader: getAllTasks,
                    },
                ],
            },
        ],
    },
    {
        path: "/auth",
        element: <GuestRoute/>,
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