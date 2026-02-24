import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Blogs from "../pages/blog/Blogs";


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
                element:<h2>About Pages</h2>
            },
            {
                path:'/contact',
                element:<h2>Contact Pages</h2>
            }
        ]
    }
])

export default router