import React, {lazy , Suspense, useEffect , useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/About.js"
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";

// import Grocery from "./components/Grocery.js"



const AppLayout=()=>{
    
const [userInfo,setUserInfo]=useState();

useEffect(()=>{
    const data={
        name:"Sparsh"
    }
    setUserInfo(data.name)
},[])
    return (
        <UserContext.Provider value={{loggedInUser:userInfo}}>
    <div className="app">
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    )
};

const Grocery=lazy(()=>import("./components/Grocery.js"))

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
                path:"/grocery",
                element:<Suspense fallback={<h1>loading..</h1>}><Grocery /></Suspense>
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