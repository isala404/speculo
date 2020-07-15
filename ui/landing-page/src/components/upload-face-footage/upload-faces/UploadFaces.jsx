import React, { Component } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { facesUploadEndpoint } from "../../../endpoints";
import { withSnackbar } from 'notistack';
import "../upload.scss"

class UploadFaces extends Component {
  state = {};

  render() {
    
    // Used to extract all image files from a dropped folder
    const Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
      const text = files.length > 0 ? "Add more files" : "Drop Files / Folders";

      return (
        <label className="dzu-inputLabel">
          {text}
          <input
            style={{ display: "none" }}
            type="file"
            accept={accept}
            multiple
            onChange={e => {
              getFilesFromEvent(e).then(chosenFiles => {
                onFiles(chosenFiles);
              });
            }}
          />
        </label>
      );
    };

    const MyImageUploader = () => {
      // const handleSubmit = (files, allFiles) => {
      //   console.log(files.map(f => f.meta));
      //   allFiles.forEach(f => f.remove());
      // };

    const getFilesFromEvent = e => {
      return new Promise(resolve => {
        getDroppedOrSelectedFiles(e).then(chosenFiles => {
          resolve(chosenFiles.map(f => f.fileObject));
        });
      });
    };

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file, remove }, status) => {
      console.log(status, meta, file);

      if (status === 'headers_received') {
        remove();
      } 
      if (status === 'error_upload') {
        this.props.enqueueSnackbar("No faces were found in the image!");
      }
    };

    // specify upload params and url for files
    const getUploadParams = ({ meta }) => {

      let token = null;
      if (localStorage.getItem("token") != null) {
          token = localStorage.getItem("token")
      } else{
          console.log("token not found");
      }

      const headers = {
        'x-access-token': token,
        'Access-Control-Allow-Origin': '*',
      }
      
      return { url: facesUploadEndpoint, headers }
    }


      return (
        <div>
          <Dropzone
            getUploadParams = { getUploadParams }
            // onSubmit = { handleSubmit }
            InputComponent={Input}
            inputContent = { "Drag image files or Click to browse" }
            getFilesFromEvent = { getFilesFromEvent }
            onChangeStatus = { handleChangeStatus }
            accept = "image/jpg, image/jpeg"
            // submitButtonContent = "Reset Dropzone"
            submitButtonDisabled="true"
            />
        </div>
      );
    };

    return (
      <div>
        {/* Dropzone to upload extracte image files from dropped folders */}
        <MyImageUploader />
      </div>
    );
  }
}

export default withSnackbar(UploadFaces);
