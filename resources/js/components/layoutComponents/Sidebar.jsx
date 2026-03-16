import { Link, useLocation, useNavigate } from "react-router-dom"
import { LayoutDashboard, ListTodo, PlusCircle, LogOut } from "lucide-react"
import { UserContext } from "../../context/UserContext"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import TaskModal from "../../views/partial/TaskModal";
import routes from "../../router/routes";

export default function Sidebar() {
    const {
        handleSubmit,
    } = useForm({});

    const location = useLocation()
    const navigate = useNavigate()

    const {signOut} = useContext(UserContext)

    const handleLogout = async () =>{
        await signOut();
        navigate(routes.login);
    };

    const menuItems = [
        { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
        { name: "Tasks", path: "/tasks", icon: <ListTodo size={18} /> },
    ]

    return (
        <>
        <div className="hidden md:flex flex-col justify-between min-h-screen h-full w-52 bg-slate-900 text-slate-200 shadow-lg">

            {/* Top Section */}
            <div>
      

                {/* Menu */}
                <ul className="mt-4 px-3 space-y-1">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path

                        return (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`
                                        flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all
                                        ${isActive
                                            ? "bg-slate-800 text-white"
                                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                        }
                                    `}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                            
                        )
                    })}
                    <li key="newTask">
                        <button
                            className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
                            onClick={()=>document.getElementById('create_task').showModal()}
                        >
                            <PlusCircle size={18} />
                            New Task
                        </button>
                    </li>
                   
                </ul>
            </div>
            


            {/* Bottom Section */}
            <div className="p-4 border-t border-slate-800">
                <form onSubmit={handleSubmit(handleLogout)}>
                    <button
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-slate-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </form>
            </div>
        </div>

        {/* create_task modal */}
        <TaskModal/>
        </>
    )
}