import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router/router'
import { UserContextProvider } from "./context/UserContext";

function App() {
  return(
    <>
      <UserContextProvider>
        <RouterProvider router={router}/>
      </UserContextProvider>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)