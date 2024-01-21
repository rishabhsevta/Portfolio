// import dotenv from 'dotenv';
// dotenv.config();
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Home from "./components/home/Home";
import reportWebVitals from "./reportWebVitals";
import Certificates from "./components/certificate/Certificates";

const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/project",
                element:<Project/>,
            },
            {
                path:"/certificates",
                element:<Certificates/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter}/>
);


reportWebVitals();
