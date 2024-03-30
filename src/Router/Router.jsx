import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import AddBook from "../Pages/AddBook/AddBook";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allbooks from "../Pages/Allbooks/Allbooks";
import ViewAll from "../Pages/ViewAll/ViewAll";
import PrivateRoute from "./PrivateRoute";
import History from "../Pages/Category/History";
import Mistry from "../Pages/Category/Mistry";
import Drawing from "../Pages/Category/Drawing";
import Fashion from "../Pages/Category/Fashion";
import Update from "../Update/Update";
import Details from "../Details/Details";
import Chackout from "../ChackOut/Chackout";
import Bookings from "../Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addbook',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allbook',
                element: <PrivateRoute><Allbooks></Allbooks></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/book')
            },
            {
                path: '/history',
                element: <PrivateRoute><History></History></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/book')
            }
            ,
            {
                path: '/mistry',
                element: <PrivateRoute><Mistry></Mistry></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/book')
            }
            ,
            {
                path: '/Drawing',
                element: <PrivateRoute><Drawing></Drawing></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/book')
            }
            ,
            {
                path: '/fashion',
                element: <PrivateRoute><Fashion></Fashion></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/book')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)

            },
            {
                path: '/chackout/:id',
                element: <Chackout></Chackout>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }


        ]
    }
])
export default router;