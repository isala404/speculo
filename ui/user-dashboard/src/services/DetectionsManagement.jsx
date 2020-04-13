import axios from "axios";
import {detectionsEndpoint, deleteFacesEndpoint} from "../endpoints";

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

// Delete a known person from the system
export async function deleteFaceFromSystem(personToBeDeleted){
    await axios.delete(deleteFacesEndpoint+personToBeDeleted);
}