import { createContext, useEffect, useState } from "react";
import api from "../axios/api";

export const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState()

    const getUser = async () => {
        try {
            const response = await api.get("/api/user");
            setUser(response.data);
        } catch {
            setUser(null);
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    const signOut = async () => {

        await api.get("/sanctum/csrf-cookie");

        await api.post("/logout");

        setUser(null);
    }

    const signUp = async (newUser) => {

        await api.get("/sanctum/csrf-cookie");

        await api.post("/register", newUser);

        await getUser();
    }

    const login = async (loggedUser) => {
        await api.get("/sanctum/csrf-cookie");

        await api.post("/login", loggedUser);

        await getUser();
    }

    return(
        <>
            <UserContext.Provider value={{user, signOut, signUp, login, getUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}