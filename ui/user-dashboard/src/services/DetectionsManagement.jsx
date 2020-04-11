import axios from "axios";
import {detectionsEndpoint} from "../endpoints";

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
            faceName: detection.name,
            timestamps: detection.timestamps
        };
    });
}