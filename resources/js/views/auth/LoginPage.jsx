import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import routes from "../../router/routes";
import api from "../../axios/api";

export default function LoginPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
      mode: "onBlur"
    });

    const navigate = useNavigate()

    const onSubmit = async (e) =>{
      const email = e.email;
      const password = e.password;

      await api.get("/sanctum/csrf-cookie");

      // Login
      await api.post("/login", {
        email,
        password,
      });
      console.log('fatto')

      navigate('/')
    };

  return (
    <main className="h-screen flex justify-center items-center p-4">
      <section className="bg-gray-700 rounded-2xl p-8 w-full max-w-md text-gray-100 ">
        <h1 className="text-2xl font-bold text-center mb-6">Accedi</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
              name="email"
              {...register("email", {
                required: "L'email è obbligatoria",
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FaLock /> Password
            </label>
            <input
              type="password"
              className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
              name="password"
              {...register("password", {
                required: "La password è obbligatoria",
                minLength: {
                  value: 8,
                  message: "La password deve essere lunga almeno 8 caratteri",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-end ">

            <div className="w-48">
            </div>

            <button
                type="submit"
                className="btn btn-primary w-50 py-3 rounded-xl shadow">
                Accedi
            </button>


            <a href={routes.register} className="ms-5">Registrati</a>

          </div>
        </form>
      </section>
    </main>
  );
}