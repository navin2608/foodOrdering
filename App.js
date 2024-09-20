import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
 import RestaurantMenu from "./src/components/RestaurantMenu";
 import { lazy } from "react";
//  import ContactUs from "./src/components/ContactUs";
const ContactUs=lazy(()=>import("./src/components/ContactUs"))
const AppLayout=()=>{
    return (
        <div className="app">          
            <Header />
            <Outlet />           
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));

const appRouter=createBrowserRouter([
    {path:"/",
    element:<AppLayout />,
    children:[
        {path:"/",
        element:<Body />
    },
        {path:"/about",
        element:<About/>
        },
        {path:"/contactus",
        element:<Suspense fallback={<div><h2 > Loading</h2></div>}><lazy><ContactUs /></lazy></Suspense>
        },
        {
            path:"/restaurants/:resId",
             element:<RestaurantMenu/>
        }
    ],
    errorElement:<Error />
},

])
root.render(<RouterProvider router={appRouter}/>);



















// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)