import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export function ToastContextProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = "success", duration = 3000) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, duration);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {/* Toast container */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                {toasts.map(t => (
                    <div
                        key={t.id}
                        className={`alert shadow-lg ${
                        t.type === "success" ? "alert-success" : "alert-error"
                        }`}
                    >
                        <span>{t.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}