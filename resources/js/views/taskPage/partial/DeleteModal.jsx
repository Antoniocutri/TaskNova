import api from "../../../axios/api";
import { useToast } from "../../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import routes from "../../../router/routes";

function DeleteModal({ task, modalId }) {

    const { addToast } = useToast();
    const navigate = useNavigate();
    
    const deleteTask = async (id) => {
        console.log(id)
        try {
            const response = await api.delete(routes.apiTasks + id)

            addToast("Task Eliminato correttamente!", "error");

            console.log(response.data)
            
            document.getElementById(modalId).close()
            navigate(routes.tasks)
        } catch (error) {
            addToast("Errore durante l'eliminazione della task", "error");
            console.error(error.response.data)
        }
        
    };

    return(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    
                    <h3 className="text-lg font-bold">Conferma Eliminazione</h3>
                        <p className="py-4">
                            Sei sicuro di voler eliminare il task 
                            <span className="font-semibold"> "{task.title}"</span>? 
                            Questa azione non può essere annullata.
                        </p>

                        <div className="modal-action justify-end gap-2">

                            <form method="dialog">
                                <button
                                    className="btn btn-outline"
                                >
                                    Annulla
                                </button>
                            </form>

                            <button
                                className="btn btn-error"
                                onClick={() => {
                                    deleteTask(task.id);
                                }}
                            >
                                Elimina
                            </button>

                        </div>


                   

                </div>
            </dialog>
        </>
    )
}

export default DeleteModal;

