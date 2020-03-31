import {Home} from "./views/Home.jsx";
import DashBoard from "./views/dashboard.jsx";

// data object to make code simpler

// All the routes in the application are defined here
const Routes = [
    {name: 'Home', path:'/', Component:Home},
    {name: 'Dashboard', path:'/dashboard', Component:DashBoard}
];

export default Routes