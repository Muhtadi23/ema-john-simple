import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componants/Shop/Shop';
import Home from './componants/Layout/Home';
import Orders from './componants/Orders/Orders';
import Inventory from './componants/Inventory/Inventory';
import Login from './componants/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  },
  {

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
