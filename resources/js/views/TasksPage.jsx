import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { useLoaderData } from "react-router-dom";
import TaskFilters from "../components/TaskComponents/TaskFilter";
import TaskTable from "../components/TaskComponents/TaskTable";

function TasksPage() {

    const tasks = useLoaderData()
    console.log(tasks.data.data)

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

                <TaskTable tasks={tasks.data.data}/>
            </div>
        </>
    )
}

export default TasksPage;