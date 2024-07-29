import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
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
        }
    ],
    errorElement:<Error />
},

])
root.render(<RouterProvider router={appRouter}/>);



















// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)