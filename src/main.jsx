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

import myArtAndCraftList from './Component/My Art&Craft List/myArtAndCraftList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

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
        element: <AddCraft></AddCraft>
      },


      {


        path: '/allpaints',
        element: <AllArt></AllArt>
      },


      {

        path: '/myarts',
        element: <myArtAndCraftList></myArtAndCraftList>

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
