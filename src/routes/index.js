import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import CustomerReviews from '../pages/CustomerReviews'
import Blog from '../pages/Blog'
import BlogDetail from "../components/Blog/BlogDetail"
import PricingPlan from '../pages/PricingPlan'
import Contact from '../pages/Contact'
import AboutUs from '../pages/About'
import DietPlan from '../pages/DietPlan'
import WorkoutPlan from "../pages/Workoutplan"
import WorkoutPlanDetail from "../components/WorkoutPlan/WorkoutPlanDetail"
import DietPlanDetail from "../components/DietPlan/DietPlanDetail"
import Login from '../pages/Login'
import GetStarted from '../pages/GetStarted'
import SignUp from '../pages/SignUp'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "CustomerReviews/",
                element : <CustomerReviews/>
            },
            {
                path : "Blog/",
                element : <Blog/>
            },
            {
                path : "Blog/:id",
                element : <BlogDetail/>
            },
            {
                path : "Pricing/",
                element : <PricingPlan/>
            },
            {
                path : "contact-us/",
                element : <Contact/>
            },
            {
                path : "about-us/",
                element : <AboutUs/>
            },
            {
                path : "DietPlan/",
                element : <DietPlan/>
            },
            {
                path : "WorkoutPlan/",
                element : <WorkoutPlan/>
            },
            {
                path : "WorkoutPlan/:id",
                element : <WorkoutPlanDetail/>
            },
            {
                path : "DietPlan/:id",
                element : <DietPlanDetail/>
            },
            {
                path : "Login/",
                element : <Login/>
            },
            {
                path : "GetStarted/",
                element : <GetStarted/>
            },
            {
                path : "Signup/",
                element : <SignUp/>
            },

        ]
    }
])


export default router