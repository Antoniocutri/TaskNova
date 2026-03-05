import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router/router'
import { UserContextProvider } from "./context/UserContext";
import { ToastContextProvider } from "./context/ToastContext";

function App() {
  return(
    <>
      <UserContextProvider>
        <ToastContextProvider>
          <RouterProvider router={router}/>
        </ToastContextProvider>
      </UserContextProvider>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)