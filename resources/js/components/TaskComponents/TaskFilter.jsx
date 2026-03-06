
export default function TaskFilters({ filters, setFilters }) {

    const handleChange = (key, value) => {
        setFilters({
            ...filters,
            [key]: value
        })
    }

    const resetFilter = () => {
        setFilters({
            status: "",
            priority: "",
            due_date: "",
        })
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

                    {/* due date */}
                    <select
                        className="select select-bordered w-full md:w-44"
                        value={filters.due_date}
                        onChange={(e)=>handleChange("due_date", e.target.value)}
                    >
                        <option value="">Scadenza</option>
                        <option value="today">Oggi</option>
                        <option value="week">Questa settimana</option>
                        <option value="expired">Scadute</option>
                    </select>

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