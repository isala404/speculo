import axios from "axios";
import {speculoBackend} from "../variables/constants";

const GetDetectionsURL = speculoBackend + `/api/get/`      // get detections URL will be here

export async function retrieveAllDetections(){
    try {
        //get allDetections data
        const res = await axios.get(GetDetectionsURL,
            {headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        });
        
        if (res != null) {
            return res
        } else {
            return null
        }

    } catch (e) {
        console.log(e)
        return null
    }
}