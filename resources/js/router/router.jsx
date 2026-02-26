import { createBrowserRouter } from "react-router";
import Navbar from "../components/layoutComponents/navbar";
import Homepage from "../views/homepage";
import Layout from "../components/layouts/Layout";
import routes from "./routes";

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
    
])

export default router;