import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TaskFilters from "../components/TaskComponents/TaskFilter";
import TaskCard from "../components/TaskComponents/TaskCard";

function TasksPage() {

    const tasks = useLoaderData()
    console.log(tasks)

    const [filters, setFilters] = useState({
        status:"",
        priority:"",
        due_date:"",
    })

    return(
        <>
            <div className="p-6">
                <TaskFilters
                    filters={filters}
                    setFilters={setFilters}
                />

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {tasks.data.data.map(task => (
                        <TaskCard key={task.id} task={task}/>
                    ))}
                </div>

                
            </div>
        </>
    )
}

export default TasksPage;