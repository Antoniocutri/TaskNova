import { Pencil, Trash2 } from "lucide-react"
import DeleteModal from "../../views/taskPage/partial/DeleteModal"
import EditModal from "../../views/taskPage/partial/EditModal"

export default function TaskCard({ task }) {

    const formattedDate = new Date(task.due_date).toLocaleDateString('it-IT')
    const deleteModalId = `delete_task_${task.id}`
    const editModalId = `edit_task_${task.id}`

    const completed = task.status === 3

    return (
        <>
        <div className={`
            card border shadow-sm
            transition-all duration-300 ease-out
            hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-primary
            ${completed ? "bg-base-200 opacity-70" : "bg-base-100"}
        `}>

            <div className="card-body group">

                {/* title + checkbox */}
                <div className="flex items-start gap-3">

                    <input
                        type="checkbox"
                        className="checkbox checkbox-success mt-1"
                        checked={completed}
                        onChange={() => /*toggleComplete(task.id)*/ {}}
                    />

                    <div className="flex-1">

                        <h2 className={`card-title text-lg transition-all
                            ${completed ? "line-through text-gray-400" : ""}
                        `}>
                            {task.title}
                        </h2>

                        {task.description && (
                            <p className="text-sm text-gray-500 mt-1">
                                {task.description}
                            </p>
                        )}

                    </div>

                </div>

                {/* badge + data */}
                <div className="flex items-center gap-2 mt-3 flex-wrap">

                    <div className={`badge gap-1 ${
                        task.priority === 3
                            ? "badge-error"
                            : task.priority === 2
                            ? "badge-warning"
                            : "badge-success"
                    }`}>
                        {task.priority === 3 ? "Alta" : task.priority === 2 ? "Media" : "Bassa"}
                    </div>

                    <div className={`badge gap-1 ${
                        task.status === 4
                            ? "badge-error"
                            : task.status === 3
                            ? "badge-success" 
                            : task.status === 2 
                            ? "badge-info" 
                            : "badge-ghost"
                    }`}>
                        {task.status === 4 ? "Scaduta" : task.status === 3 ? "Completata" : task.status === 2 ? "In corso" : "Da fare"}
                    </div>

                    <span className="text-sm text-gray-500 ml-auto">
                        {formattedDate}
                    </span>

                </div>

                {/* actions */}
                <div className="card-actions justify-end mt-3 opacity-0 group-hover:opacity-100 transition">
                    <button
                        className="btn btn-ghost btn-sm"
                        disabled={completed}
                        onClick={() => document.getElementById(editModalId).showModal()}
                    >
                        <Pencil size={16} />
                    </button>

                    <button 
                        className="btn btn-ghost btn-sm text-error" 
                        onClick={() => document.getElementById(deleteModalId).showModal()}>
                        <Trash2 size={16}/>
                    </button>

                </div>

            </div>

        </div>
        
        <DeleteModal task={task} modalId={deleteModalId} />

        <EditModal task={task} modalId={editModalId}/>
        </>
    )
}
