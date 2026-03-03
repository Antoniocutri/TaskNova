import { Outlet } from "react-router-dom";
import Navbar from "../layoutComponents/Navbar";
import Footer from "../layoutComponents/Footer";
import Sidebar from "../layoutComponents/Sidebar";

export default function Layout(){
    return (
        <>
            <Navbar/>

            <section className="grid grid-cols-7 gap-4">
                <div className="col-span-5 md:col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-7 md:col-span-6">
                    <Outlet />
                </div>
            </section>

            <Footer/>
        </>

    )
}