import Home from "./views/Home.jsx";
import Dashboard from "./views/Dashboard.jsx";
import UploadFootage from "./views/UploadFootage.jsx";
import UploadFaces from "./views/UploadFaces.jsx"

// data object to make code simpler

// All the routes in the application are defined here
const Routes = [
    {name: 'Home', path:'/', Component:Home},
    {name: 'Dashboard', path:'/dashboard', Component:Dashboard},
    {name: 'Upload Footage', path:'/upload', Component:UploadFootage},
    {name: 'Upload Faces', path:'/add', Component:UploadFaces}
];

export default Routes