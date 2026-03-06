import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import api from "../../axios/api";
import { useToast } from "../../context/ToastContext";

function TaskModal() {

    const { addToast } = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const closeModal = () => {
        document.getElementById('create_task').close()
        reset() 
    }

    
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await api.post('/api/tasks', data)

            addToast("Task creato correttamente!");

            console.log(response.data)
            closeModal()
        } catch (error) {
            addToast("Errore durante la creazione della task", "error");
            console.error(error.response.data)
        }
        
    };

    return(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="create_task" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                    <h3 className="font-bold text-lg mb-3">CREA NUOVO TASK</h3>
                    
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                        {/* TITLE */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold">Titolo</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Task title"
                                className="input input-bordered w-full"
                                {...register("title", {
                                    required: "Il titolo è obbligatorio",
                                })}
                            />
                            <p className="text-red-400 text-sm mt-1 min-h-5">
                                {errors.title?.message}
                            </p>
                        </div>


                        {/* DESCRIPTION */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold">Descrizione</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Task description"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                                {...register("description")}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* STATUS */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Status</span>
                                </label>
                                <select name="status" 
                                    className="select select-bordered w-full"
                                    {...register("status", {
                                        valueAsNumber: true
                                    })}>
                                    
                                    <option value="0" defaultValue>Da fare</option>
                                    <option value="1">In corso</option>
                                    <option value="2">Completato</option>
                                </select>
                            </div>


                            {/* PRIORITY */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Priorità</span>
                                </label>
                                <select name="priority" 
                                    className="select select-bordered w-full"
                                    {...register("priority", {
                                        valueAsNumber: true
                                    })}>

                                    <option value="0" defaultValue>Bassa</option>
                                    <option value="1">Media</option>
                                    <option value="2">Alta</option>
                                </select>
                            </div>
                        </div>


                        {/* DUE DATE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Data di Scadenza</span>
                            </label>
                            <input
                                type="date"
                                name="due_date"
                                className="input input-bordered w-full"
                                {...register("due_date", {
                                    required: "La scadenza è obbligatorio",
                                    validate: value => validateFutureDate(value)
                                })}
                                />
                                <p className="text-red-400 text-sm mt-1 min-h-5">
                                    {errors.due_date?.message}
                                </p>
                        </div>


                        {/* ACTIONS */}
                        <div className="modal-action mt-5">

                            <button
                                type="submit"
                                className="btn btn-primary"
                                >
                                <Plus size={18}/>
                                Aggiungi Task
                            </button>

                        </div>

                    </form>

                </div>
            </dialog>
        </>
    )
}

export default TaskModal;

function validateFutureDate(value) {

    const selectedDate = new Date(value)
    const today = new Date()

    return selectedDate > today || "La scadenza deve essere nel futuro"
}