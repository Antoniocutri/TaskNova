import { createBrowserRouter } from "react-router";
import Navbar from "../components/layoutComponents/navbar";
import Homepage from "../views/homepage";
import Layout from "../components/layouts/Layout";
import routes from "./routes";
import LoginPage from "../views/auth/LoginPage";
import RegisterPage from "../views/auth/RegisterPage";
import { getAllTasks, getDashboardData } from "./loader";
import ProtectedRoute from "../middlware/ProtectedRoutes";
import GuestRoute from "../middlware/GuestRoutes";
import TasksPage from "../views/taskPage/TasksPage";

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
                        Component: Homepage,
                        loader: getDashboardData,
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