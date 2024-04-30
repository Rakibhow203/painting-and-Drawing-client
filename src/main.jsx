import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Component/Home/Home.jsx'
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import LogIn from './Component/LogIn/LogIn.jsx';
import Regitation from './Component/Regitaion/Regitation.jsx';
import AddCraft from './Component/AddCraft/AddCraft.jsx';
import AllArt from './Component/AllArt/AllArt.jsx';
import MyArt from './Component/MyArt/MyArt.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import ProductByCategory from './Component/ProductByCategory/ProductByCategory.jsx';
import ProductsDetails from './Component/ProductsDetails/ProductsDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>


      },

      {

        path: '/login',
        element: <LogIn></LogIn>

      },

      {

        path: '/register',
        element: <Regitation></Regitation>

      },


      {


        path: '/addp&d',
        element: <PrivateRoute>
          <AddCraft></AddCraft>
        </PrivateRoute>
      },



      {


        path: '/allpaints',
        element: <AllArt></AllArt>
      },

      {

        path: '/myArts',
        element: <PrivateRoute>
          <MyArt></MyArt>
        </PrivateRoute>

      },



      {
        // 2 works
        path: '/product-by-category/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/getProduct/${params.id}`),

        element: <ProductByCategory></ProductByCategory>
      },

      {

        path: "/products/:id",
        element: <ProductsDetails></ProductsDetails>,


      },



    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
