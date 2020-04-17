import React, { Component } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { footageUploadEndpoint } from "../../../endpoints";
import "../upload.scss";

class UploadFootage extends Component {
  state = {};

  Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const text = files.length > 0 ? "Add more files" : "Choose Video file";

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

  render() {
    const MyVideoUploader = () => {
      // react-dropzone-uploader
      // specify upload params and url for files
      const getUploadParams = ({ meta }) => {
        return { url: footageUploadEndpoint };
      };

      // called every time a file's `status` changes
      const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file);
      };

      // receives array of files that are done uploading when submit button is clicked
      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta));
        allFiles.forEach(f => f.remove());
      };

      return (
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          InputComponent={this.Input}
          accept="video/*" // allow only video files to be uploaded
          maxFiles="1"
        />
      );
    };

    return (
      <div>
        {/* <form action="/file-upload" class="dropzone">       // standard dropzone
                    <div class="fallback">
                        <input name="file" type="file" accept="video/*" multiple />
                        upload any video file
                    </div>
                </form> */}

        <MyVideoUploader />
      </div>
    );
  }
}

export default UploadFootage;
