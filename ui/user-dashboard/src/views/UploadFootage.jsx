import React, {Component} from "react";
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import {footageUploadEndpoint} from "../endpoints";

class UploadFootage extends Component{
    state={};
    
    render(){

        const MyVideoUploader = () => {         // react-dropzone-uploader
            // specify upload params and url for files
            const getUploadParams = ({ meta }) => { return { url: footageUploadEndpoint } }
            
            // called every time a file's `status` changes
            const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
            
            // receives array of files that are done uploading when submit button is clicked
            const handleSubmit = (files, allFiles) => {
              console.log(files.map(f => f.meta))
              allFiles.forEach(f => f.remove())
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