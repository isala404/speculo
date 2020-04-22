import {Home} from "./views/Home.jsx";
import Dashboard from "./views/dashboard.jsx";
import UploadFootage from "./views/UploadFootage.jsx";
import UploadFaces from "./views/UploadFaces.jsx"
import FilterResults from "./views/FilterResults.jsx";

// data object to make code simpler

// All the routes in the application are defined here
const Routes = [
    {name: 'Home', path:'/', Component:Home},
    {name: 'Dashboard', path:'/dashboard', Component:Dashboard},
    {name: 'Filtered Detections', path:'/filter', Component:FilterResults},
    {name: 'Upload Footage', path:'/upload', Component:UploadFootage},
    {name: 'Upload Faces', path:'/add', Component:UploadFaces}
];

export default Routes