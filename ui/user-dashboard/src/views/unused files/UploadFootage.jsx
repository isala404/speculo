import React, {Component} from "react";
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import {footageUploadEndpoint} from "../../endpoints";

class UploadFootage extends Component{
    constructor(props){
        super(props);

        state={
            objURL= null
        };
    }




    render(){

        const MyVideoUploader = () => {         // react-dropzone-uploader
            // specify upload params and url for files
            const getUploadParams = ({ meta }) => { return { url: footageUploadEndpoint } }
            
            // called every time a file's `status` changes
            const handleChangeStatus = ({ meta, file }, status) => { 
                // console.log(status, meta, file) 
            }
            
            // receives array of files that are done uploading when submit button is clicked
            const handleSubmit = (event) => {
                const file = event.target.files[0]
                console.log(file, "jfaufdadfffffo");

            //     console.log(files);
            //     console.log(allFiles);
            //     // console.log(files.map(f => f.meta));

            //     files.map(f => (
            //         // f.meta
            //         objURL = window.URL.createObjectURL(f.meta)
            //         ))
            //     // objURL = window.URL.createObjectURL(files[0][0]);

            //     console.log(objURL);
            //     // Save data to sessionStorage
            //     sessionStorage.setItem('videoURL', objURL);


            //     allFiles.forEach(f => f.remove())
            }
            
            return (
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    accept="video/*"      // allow only video files to be uploaded
                    maxFiles = "1"
                />
              )
        }

        
        return(
            <div>
                <h1>SELECT VIDEO FOOTAGE FILE TO ANALYSE</h1>

                <MyVideoUploader />

            </div>
        )
    }
}

export default UploadFootage;