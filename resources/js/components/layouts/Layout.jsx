import { Outlet } from "react-router-dom";
import Navbar from "../layoutComponents/Navbar";
import Footer from "../layoutComponents/Footer";

export default function Layout(){
    return (
        <>
            <Navbar/>
            <Outlet/>  
            <Footer/>
        </>

    )
}