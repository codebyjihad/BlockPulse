import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Blogs from "../pages/blog/Blogs";
import About from "../pages/about/About";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:'/block',
                element:<Blogs/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<h2>Contact Pages</h2>
            }
        ]
    }
])

export default router