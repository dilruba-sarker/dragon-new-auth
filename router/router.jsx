import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../src/LayOut/HomeLayout';
import CategoryNews from './../src/pages/CategoryNews';
import AuthLayOut from '../src/LayOut/AuthLayOut';


const router =createBrowserRouter([
{
    path:"/",
    element: <HomeLayout></HomeLayout>,
    children:[{
        path:'category/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        ,
        element:<CategoryNews></CategoryNews>
    }

]
},{
    path:"/news",
    element:<h1>News layout</h1>
},{
    path:"auth",
    element:<AuthLayOut></AuthLayOut>,
    children:[{
        path:"/auth/login",
        element:<h1>log in goes</h1>
    }]
},{
    path:"*",
    element:<h1>Error</h1>
}
])
export default router