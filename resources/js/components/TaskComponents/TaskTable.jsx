import { Pencil, Trash2 } from "lucide-react"

export default function TaskTable({ tasks }) {

    return (

        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

            <table className="table w-full">

                <thead className="bg-base-200 text-sm">
                    <tr>
                        <th>Titolo</th>
                        <th>Priorità</th>
                        <th>Stato</th>
                        <th>Scadenza</th>
                        <th className="text-right">Azioni</th>
                    </tr>
                </thead>

                <tbody>

                    {tasks.map((task) => (

                        <tr
                            key={task.id}
                            className="hover:bg-base-100 transition"
                        >

                            {/* title */}
                            <td className="font-medium">
                                {task.title}
                            </td>


                            {/* priority */}
                            <td>
                                <span className={`badge ${
                                    task.priority == 2
                                        ? "badge-error"
                                        : task.priority == 1
                                        ? "badge-warning"
                                        : "badge-success"
                                }`}>
                                    {task.priority == 2
                                        ? "Alta"
                                        : task.priority == 1
                                        ? "Media"
                                        : "Bassa"}
                                </span>
                            </td>


                            {/* status */}
                            <td>

                                <span className={`badge ${
                                    task.status == 2
                                        ? "badge-success"
                                        : task.status == 1
                                        ? "badge-warning"
                                        : "badge-ghost"
                                }`}>
                                    {task.status == 2
                                        ? "Completata"
                                        : task.status == 1
                                        ? "In Corso"
                                        : "Da fare"}

                                </span>

                            </td>


                            {/* due_date */}
                            <td className="text-sm text-gray-500">
                                {new Date(task.due_date).toLocaleDateString('it-IT')}
                            </td>


                            {/* action */}
                            <td className="flex justify-end gap-2">

                                <button className="btn btn-ghost btn-sm">
                                    <Pencil size={16}/>
                                </button>

                                <button className="btn btn-ghost btn-sm text-error">
                                    <Trash2 size={16}/>
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}