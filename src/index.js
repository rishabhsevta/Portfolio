// import dotenv from 'dotenv';
// dotenv.config();
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Home from "./components/home/Home";
import Xyz from "./components/xyz/Xyz";
import reportWebVitals from "./reportWebVitals";

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
                path:"/xyz",
                element:<Xyz/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter}/>
);


reportWebVitals();
