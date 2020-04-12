import React, {Component} from "react";
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import {facesUploadEndpoint} from "../endpoints";

class UploadFaces extends Component{
    state={};
    
    render(){


        const Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
            const text = files.length > 0 ? 'Add more files' : 'Choose files'
          
            return (
              <label style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3 }}>
                {text}
                <input
                  style={{ display: 'none' }}
                  type="file"
                  accept={accept}
                  multiple
                  onChange={e => {
                    getFilesFromEvent(e).then(chosenFiles => {
                      onFiles(chosenFiles)
                    })
                  }}
                />
              </label>
            )
          }
          
          const CustomInput = () => {
            const handleSubmit = (files, allFiles) => {
              console.log(files.map(f => f.meta))
              allFiles.forEach(f => f.remove())
            }
          
            const getFilesFromEvent = e => {
              return new Promise(resolve => {
                getDroppedOrSelectedFiles(e).then(chosenFiles => {
                  resolve(chosenFiles.map(f => f.fileObject))
                })
              })
            }

            // called every time a file's `status` changes
            const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

            return (
                <Dropzone
                  getUploadParams={() => ({ url: facesUploadEndpoint })}
                  onSubmit={handleSubmit}
                  InputComponent={Input}
                  getFilesFromEvent={getFilesFromEvent}
                  onChangeStatus={handleChangeStatus}
                  accept="image/*"
                />
              )
            }
        
        return(
            <div>
                <h1>ADD IMAGES BY DROPPING FILE/ Images</h1>

                <CustomInput />
            </div>
        )
    }
}

export default UploadFaces;