import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import api from "../../axios/api";

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode:"onBlur"
    });

    const navigate = useNavigate()

    const password = watch("password");

    const onSubmit = async (e) =>{
        const name = e.name;
        const email = e.email;
        const password = e.password;
        const password_confirmation = e.password_confirmation;

        await api.get("/sanctum/csrf-cookie");

        // Login
        await api.post("/register", {
            name,
            email,
            password,
            password_confirmation
        });
        console.log('ok')

        navigate('/')
    };


    return(
        <>
            <main className="h-screen flex justify-center items-center p-4">
                <section className="bg-gray-700 text-gray-100 rounded-2xl p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Registrati</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaUser /> Nome </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("name", {
                                    required: "This film is required"
                                })}
                            />
                            {errors.name && (
                                <p role="alert" className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaEnvelope /> Email </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("email", {
                                    required: "This film is required"
                                })}
                            />
                            {errors.email && (
                                <p role="alert" className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaLock /> Password </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("password", {
                                    required: "This film is required", 
                                    minLength: 8,
                                })}
                            />
                            {errors.password && (
                                <p role="alert" className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaLock /> Conferma Password </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("password_confirmation", {
                                    required: "This film is required", 
                                    minLength: 8,
                                    validate: value =>
                                        value === password || "Le password devono coincidere"
                                })}
                                
                            />
                            {errors.password_confirmation && (
                                <p role="alert" className="text-red-400 text-sm mt-1">{errors.password_confirmation.message}</p>
                            )}
                        </div>

                        <div className="flex justify-between items-end ">
                            <div className="w-20">
                            </div>

                            <button
                                className="w-50 py-3 rounded-xl btn btn-primary">
                                Registrati
                            </button>

                            <a href={routes.login} className="ms-5">Login</a>
                        </div>

                    </form>
                </section>
            </main>
        </>
    )
}