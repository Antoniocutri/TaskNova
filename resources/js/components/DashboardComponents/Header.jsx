import { useContext } from "react";
import { MdWavingHand } from "react-icons/md";
import { UserContext } from "../../context/UserContext";

function Header( {stats} ) {

    // define color to use in progress bar depending by percentage of task completed
    function setColor() {
        if (stats?.percentages.completed < 30) return "danger"
        if (stats?.percentages.completed < 50) return "warning"
        return "success"
    }
    const color = setColor()

    const colors = {
        success: {
            text: "text-success",
            progress: "progress-success",
        },
        warning: {
            text: "text-warning",
            progress: "progress-warning",
        },
        danger: {
            text: "text-error",
            progress: "progress-error",
        },
    }

    const {user} = useContext(UserContext)

    return(
        <>
            <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300">

                <div className="card-body">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                        {/* LEFT */}
                        <div className="flex items-center gap-4">

                            <div>
                                <h1 className="text-2xl font-bold flex items-center gap-2">
                                    <MdWavingHand className="text-warning text-xl" />
                                    Ciao, {user?.name}
                                </h1>

                                <p className="text-sm opacity-70">
                                    Oggi è {new Date().toLocaleDateString("it-IT", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long"
                                        })}
                                </p>

                                <p className="text-sm mt-1">
                                    Hai <span className="font-semibold text-primary">{stats?.stats.total_tasks} task</span> totali — 
                                    <span className="font-semibold text-warning"> {stats?.stats.completed} da completare</span>
                                    {stats?.stats.overdue > 0 && 
                                       <span> — <span className="font-semibold text-error">{stats?.stats.overdue} scadute</span></span>
                                    }
                                </p>
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="stats shadow-sm">

                            <div className="stat">
                                <p className="stat-title">Progresso</p>
                                <p className={`stat-value ${colors[color].text} text-lg`}>{stats?.percentages.completed}%</p>

                                <div className="stat-desc w-40 mt-2">
                                    <progress
                                        className={`progress ${colors[color].progress} w-full`}
                                        value={stats?.percentages.completed}
                                        max="100"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;