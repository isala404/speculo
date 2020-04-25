import {Home} from "./views/Home.jsx";
import Dashboard from "./components/dashboard.jsx";
import WebCam from "./components/webcam/webcam.component"
import { Admin } from "./views/Admin.jsx";
import {Login, Register, Profile} from "./components/login/index";
import DashboardPanel from "./views/DashboardPanel.jsx";
import { Upload } from "./views/Upload.jsx";
//import { Auth } from "./Auth";
import FilterResults from "./views/FilterResults.jsx";


// data object to make code simpler

// All the routes in the application are defined here
const Routes = [
    {name: 'Home', path:'/', Component:Home},
    // {name: 'Dashboard', path:'/dashboard', Component:Dashboard},
    {name: 'Dashboard Panel', path:'/dashboard-panel', Component:DashboardPanel},
    {name: 'Upload Faces', path:'/upload', Component:Upload},
    {name: 'Proof of Concept', path:'/live-detection', Component:WebCam},
    {name: 'Admin', path:'/admin', Component:Admin},
    {name: 'Login', path:'/login', Component:Login},
    {name: 'Register', path:'/sign-up', Component:Register},
    {name: 'Profile', path:'/profile', Component:Profile}
    {name: 'Filtered Detections', path:'/filter', Component:FilterResults},

];

export default Routes