import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import ReactDOM from 'react-dom/client';
import React from "react";
import Inicio from "./componentes/Inicio";



const router= createBrowserRouter([
  {
    path:"/",
    element:<Inicio />,
  },
  {
    path:"/app",
    element:<App />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
