import {Home} from "./views/Home.jsx";
import Dashboard from "./views/dashboard.jsx";
import WebCam from "./components/webcam/webcam.component"
import { UploadPage } from "./views/upload.jsx";
import { Admin } from "./views/Admin.jsx";

// data object to make code simpler

// All the routes in the application are defined here
const Routes = [
    {name: 'Home', path:'/', Component:Home},
    {name: 'Dashboard', path:'/dashboard', Component:Dashboard},
    {name: 'Uploads', path:'/upload', Component:UploadPage},
    {name: 'Proof of Concept', path:'/live-detection', Component:WebCam},
    {name: 'Admin', path:'/admin', Component:Admin}
];

export default Routes