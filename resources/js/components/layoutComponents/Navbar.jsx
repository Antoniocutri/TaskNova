import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
    const [slug, setSlug] = useState();

    const handleChange = (e) =>{
        setSlug(e.target.value)
    }

    const {user} = useContext(UserContext)
    console.log(user)

    return(
        <>
            <nav className="navbar shadow-sm p-4 w-full back-primary">

                <div className="flex-1">
                    <Link className="btn btn-ghost text-2xl text hover:text-black!" to={routes.home}>TaskNova</Link>
                </div>
                <div className="flex gap-2">

                    <p className="text-lg text-blue-100">
                        Benvenuto, <span className="font-semibold text-white">{user?.name}</span>
                    </p>

                </div>
            </nav>
        </>
    )
}
