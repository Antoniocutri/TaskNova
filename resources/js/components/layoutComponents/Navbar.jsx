import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router/routes";

export default function Navbar() {
    const [slug, setSlug] = useState();

    const handleChange = (e) =>{
        setSlug(e.target.value)
    }

    return(
        <>
            <nav className="navbar shadow-sm p-4 w-full back-primary">

                <div className="flex-1">
                    <Link className="btn btn-ghost text-2xl text hover:text-black!" to={routes.home}>TaskNova</Link>
                </div>
                <div className="flex gap-2">

                    <input type="text" placeholder="Search" onChange={handleChange} className="input w-24 md:w-auto" />
                    <Link className="btn btn-square me-6" to={`/search/${slug}`}><FaSearch/></Link>

                </div>
            </nav>
        </>
    )
}
