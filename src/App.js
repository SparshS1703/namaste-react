import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/About.js"
import RestaurantMenu from "./components/RestaurantMenu.js";

const AppLayout=()=>{
    return <div className="app">
        <Header />
        <Outlet />
    </div>
};

const AppRouter= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }

        ],
        errorElement:<Error />
    },
   
])




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);