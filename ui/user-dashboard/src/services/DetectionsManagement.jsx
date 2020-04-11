import axios from "axios";
import {detectionsEndpoint} from "../endpoints";

export async function retrieveAllDetections() {
    try {
        //get allDetections data
        return await axios.get(detectionsEndpoint,
            {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            });
    } catch (e) {
        console.log(e)
        return null
    }
}