import { createBrowserRouter } from "react-router-dom";
import Category from "../../Component/Pages/Category/Category";
import Home from "../../Component/Pages/Home/Home";
import News from "../../Component/Pages/News/News";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import TermsAndConditions from "../../Terms&Conditions/TermsAndConditions";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])