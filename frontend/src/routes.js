import { createBrowserRouter} from 'react-router-dom' 
import Home from './component/home'
import Subscriptions from './component/Subscriptions'
import Contact from './component/contact'
import SignIn from './component/signIn'
import UserDashboard from './component/userDashboard'
import Login from './component/login'
import Register from './component/register'

const Router = createBrowserRouter([

        {
            path: '/',
            element : <Home/>
        },
        {
            path : "/Subscriptions",
            element : <Subscriptions/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/signin',
            element: <SignIn/>
        },
        {
            path: '/dashboard',
            element: <UserDashboard/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
])

export default Router
