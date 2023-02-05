import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import FishDetails from "./components/FishDetails";

const Applayout = ()=>
{
 return (
 <>
    <Header />
    <Outlet />
    <Footer/>
    </>
 )
}

const appRouter = createBrowserRouter([
   {
     path: "/",
     element: <Applayout />,
     errorElement: <Error />,
     children: [
       {
         path: "/about", 
         element: <About />,
       },
       {
         path: "/",
         element: <Body />,
       },
       {
         path: "/contact",
         element: <Contact />,
       },
       {
        path: "/fishdetail/:fid",
        element: <FishDetails />,
      }
     ],
   },
 ]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)