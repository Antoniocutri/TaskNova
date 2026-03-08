import { FaSearch } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import routes from "../../router/routes";

export default function TaskFilters({ filters, setSearchParams  }) {
    const navigate = useNavigate();

    const handleChange = (key, value) => {

        const params = new URLSearchParams()

        if (key === "status") 
            params.set("status", value)
        else if (filters.status) 
            params.set("status", filters.status)

        if (key === "priority") 
            params.set("priority", value)
        else if (filters.priority) 
            params.set("priority", filters.priority)

        if (key === "title") 
            params.set("title", value)
        else if (filters.title)
            params.set("title", filters.title)

        setSearchParams(params)
    }

    const resetFilter = () => {
        navigate(routes.tasks)
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border p-5 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <h2 className="text-lg font-semibold">
                    Filtri
                </h2>

                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">

                    {/* Status */}
                    <select
                        className="select select-bordered w-full md:w-40"
                        value={filters.status}
                        onChange={(e)=>handleChange("status", e.target.value)}
                    >
                        <option value="">Stato</option>
                        <option value="0">Da fare</option>
                        <option value="1">In corso</option>
                        <option value="2">Completata</option>
                        <option value="3">Scaduta</option>
                    </select>

                    {/* priority */}
                    <select
                        className="select select-bordered w-full md:w-40"
                        value={filters.priority}
                        onChange={(e)=>handleChange("priority", e.target.value)}
                    >
                        <option value="">Priorità</option>
                        <option value="0">Bassa</option>
                        <option value="1">Media</option>
                        <option value="2">Alta</option>
                    </select>

                    {/* search by title */}
                    <input
                        type="text"
                        placeholder="Cerca per titolo.."
                        value={filters.title}
                        onChange={(e)=>handleChange("title", e.target.value)}
                        className="input w-24 md:w-auto"
                    />

                    {/*Reset Filter */}
                    <button
                        className="btn btn-ghost"
                        onClick={() => resetFilter()}
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>
    )
}
