import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../src/LayOut/HomeLayout';
import CategoryNews from './../src/pages/CategoryNews';
import AuthLayOut from '../src/LayOut/AuthLayOut';
import Login from './../src/pages/Login';
import Register from './../src/pages/Register';
import NewsDetails from '../src/pages/NewsDetails';
import PrivateRoute from '../src/route/PrivateRoute';


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
    path:"/news/:id",
    element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
},{
    path:"auth",
    element:<AuthLayOut></AuthLayOut>,
    children:[
        {
        path:"/auth/login",
        element:<Login></Login>,
    },
        {
        path:"/auth/register",
        element:<Register></Register>,
    },
]
},{
    path:"*",
    element:<h1>Error</h1>
}
])
export default router