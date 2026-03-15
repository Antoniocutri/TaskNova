import { FaExclamationTriangle, FaClock } from "react-icons/fa";

export default function DueSoonTasks({ tasks }) {
    console.log(tasks)

    const getStyle = (due_date) => {

        const days_left = getDayUntilDue(due_date)

        if (days_left == 0) {
            return {
                color: "text-error font-bold animate-pulse",
                icon: <FaExclamationTriangle />
            }
        }

        if (days_left == 1) {
            return {
                color: "text-warning",
                icon: <FaExclamationTriangle />
            }
        }

        return {
            color: "text-info",
            icon: <FaClock />
        }
    }

    const getLabel = (due_date) => {
        
        const days_left = getDayUntilDue(due_date)

        if (days_left == 0) return "Oggi"
        if (days_left == 1) return "Domani"
        return `Tra ${days_left} giorni`
    }

    // Returns the number of days until the task is due
    const getDayUntilDue = (due_date) => {
        const today = new Date()
        const dueDate = new Date(due_date)
        const diffTime = dueDate - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    return (
        <div className="card bg-base-300 shadow">

            <div className="card-body">

                <ul className="space-y-2">

                    {tasks.map(task => {
                        const style = getStyle(task.due_date)

                        return (
                            <li
                                key={task.id}
                                className="flex items-center justify-between hover:bg-base-300 px-3 py-2 rounded-lg transition"
                            >

                                <div className={`flex items-center gap-2 ${style.color}`}>
                                    {style.icon}
                                    <span className=" font-medium">
                                        {task.title}
                                    </span>
                                </div>

                                <span className={`text-xs ${style.color}`}>
                                    {getLabel(task.due_date)}
                                </span>

                            </li>
                        )
                    })}

                </ul>

            </div>
        </div>
    )
}