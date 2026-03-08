import React, { useContext, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import TaskFilters from "../../components/TaskComponents/TaskFilter";
import TaskCard from "../../components/TaskComponents/TaskCard";
import { HiOutlineClipboardList } from "react-icons/hi"

function TasksPage() {

    const tasks = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    const filters = {
        status: searchParams.get("status") || "",
        priority: searchParams.get("priority") || "",
        title: searchParams.get("title") || "",
    }

    return(
        <>
            <div className="p-6">
                <TaskFilters
                    filters={filters}
                    setSearchParams={setSearchParams}
                />

            {tasks.data?.data?.length === 0 ? (

                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    
                    <div className="bg-base-200 p-6 rounded-full mb-4">
                        <HiOutlineClipboardList className="w-10 h-10 text-base-content/60" />
                    </div>

                    <h2 className="text-lg font-semibold">Nessun task trovato</h2>
                    
                    <p className="text-sm text-base-content/60 mt-1">
                        Crea il tuo primo task per iniziare
                    </p>

                </div>
            ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {tasks.data?.data?.map(task => (
                        <TaskCard key={task.id} task={task}/>
                    ))}
                </div>
            )}

                
            </div>
        </>
    )
}

export default TasksPage;
