export const speculoBackend = `http://speculo.isala.me`;           // GCP hosted endpoint
// export const speculoBackend = process.env.REACT_APP_API_ENDPOINT;           // local hosting endpoint


// get endpoints
export const detectionsEndpoint = `${speculoBackend}/api/get/`;         // get all detections post processing
export const getAllFacesEndpoint = `${speculoBackend}/api/v1/faces?`;        // get all saved faces with blacklist info from backend

// post (uploading) endpoints
export const footageUploadEndpoint = `${speculoBackend}/api/post/footage/`;
// export const footageUploadEndpoint = 'https://httpbin.org/post';         // for testing purposes
export const facesUploadEndpoint = `${speculoBackend}/api/v1/faces/`;

// delete endpoints
export const deleteAllFacesEndpoint = `${speculoBackend}/api/v1/faces`;             // delete all faces
export let deleteFacesEndpoint = `${speculoBackend}/api/v1/faces/`;          // delete one face

// patch endpoints
export const editDetailsEndpoint = `${speculoBackend}/api/v1/faces/`              // edit details of a person