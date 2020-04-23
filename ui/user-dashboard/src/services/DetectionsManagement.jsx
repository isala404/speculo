import axios from "axios";
import {detectionsEndpoint, getAllFacesEndpoint, deleteFacesEndpoint, editDetailsEndpoint} from "../endpoints";

// Get all detections of people in a video
export async function retrieveAllDetections() {
    const res = await axios.get(detectionsEndpoint, {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    });
    return res.data.map(detection => {
        return {
            id: detection._id,
            name: detection.name,
            blacklisted: detection.blacklisted,
            timestamps: detection.timestamps
        };
    });
}

// ------------

// Get all details of people stored in the system (without the fingerprint)
export async function retrieveAllRecords() {
    const res = await axios.get(getAllFacesEndpoint+'false', {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    });
    return res.data.map(detection => {
        return {
            id: detection._id,
            name: detection.name,
            blacklisted: detection.blacklisted,
            timestamps: detection.timestamps
        };
    });
}

// ------------

// Delete a known person from the system
export async function deleteFaceFromSystem(personId){
    // let token = jwt;
        // if (localStorage.getItem("token") != null) {
        //     token = localStorage.getItem("token")
        // }
    
    const res = await axios.delete(deleteFacesEndpoint+personId, {
        headers: {
            // 'x-access-token': token,
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    });
    
    return res;
}

// ------------

// Edit a name of a person in the system
export async function editNameInSystem(personId, newName){
    let postBody = {
        label: newName
    }

    // let token = jwt;
    // if (localStorage.getItem("token") != null) {
    //     token = localStorage.getItem("token")
    // }

    const res = await axios
        .patch(editDetailsEndpoint/`${personId}/label`, postBody,
            {
                headers: {
                    // 'x-access-token': token,
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            })

    return res;
}

// ------------

// blacklist a person in the system
export async function blacklistPersonInSystem(personId){
    // let token = jwt;
    // if (localStorage.getItem("token") != null) {
    //     token = localStorage.getItem("token")
    // }

    const res = await axios
        .patch(editDetailsEndpoint/`${personId}/blacklist`,
            {
                headers: {
                    // 'x-access-token': token,
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            })

    return res;
}

// ------------

// whitelist a person in the system
export async function whitelistPersonInSystem(personId){
    // let token = jwt;
    // if (localStorage.getItem("token") != null) {
    //     token = localStorage.getItem("token")
    // }

    const res = await axios
        .patch(editDetailsEndpoint/`${personId}/whitelist`,
            {
                headers: {
                    // 'x-access-token': token,
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            })

    return res;
}
