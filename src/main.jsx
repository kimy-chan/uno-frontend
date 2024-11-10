import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { Login } from './login.jsx';
import { AutenticacionProvider } from './autenticacionProvider.jsx';
import { AnadirLibros } from './anadirLibros.jsx';
import { Libros } from './libros.jsx';
import { AñadirCategoria } from './añadirCategoria.jsx';
import { Pedido } from './pedido.jsx';
import { PrestamoPedido } from './prestamoPedido.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>

  },
    {
    path: "/libros",
    element: <Libros/>

  },
   {
    path: "/anadir",
    element: <AnadirLibros/>

  },
     {
    path: "/categoria",
    element: <AñadirCategoria/>

  },
    
  {
    path: "/pedidos",
    element: <Pedido/>

  },
      
  {
    path: "/prestamo",
    element: <PrestamoPedido/>

  }
  
  ,
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AutenticacionProvider>  <RouterProvider router={router} /></AutenticacionProvider>
  </StrictMode>,
)
