import React, { Component } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { facesUploadEndpoint } from "../../../endpoints";
import "../upload.scss"

class UploadFaces extends Component {
  state = {};

  render() {
    
    // Used to extract all image files from a dropped folder
    const Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
      const text = files.length > 0 ? "Add more files" : "Choose files";

      return (
        <label className="upload-label">
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
      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta));
        allFiles.forEach(f => f.remove());
      };

      const getFilesFromEvent = e => {
        return new Promise(resolve => {
          getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject));
          });
        });
      };

      // called every time a file's `status` changes
      const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file);
      };

      return (
        <div>
          <Dropzone
            getUploadParams={() => ({ url: facesUploadEndpoint })}
            onSubmit={handleSubmit}
            // InputComponent={Input}
            inputContent={"Drag image files or Click to browse"}
            getFilesFromEvent={getFilesFromEvent}
            onChangeStatus={handleChangeStatus}
            accept="image/*"
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

export default UploadFaces;
