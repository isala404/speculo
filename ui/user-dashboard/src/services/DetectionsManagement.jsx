import axios from "axios";
import {
  // detectionsEndpoint,
  getAllFacesEndpoint,
  deleteFacesEndpoint,
  editDetailsEndpoint
} from "../endpoints";

// Get all detections of people in a video
// export async function retrieveAllDetections() {
//   let token = null;
//   if (localStorage.getItem("token") != null) {
//     token = localStorage.getItem("token");
//     console.log("Token: ", token);
//   } else {
//     console.log("token not found");
//   }

//   const res = await axios.get(detectionsEndpoint, {
//     headers: {
//       "x-access-token": token,
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     }
//   });
//   console.log(res.data);
//   return res.data;
// }

// ------------

// Get all details of people stored in the system (without the fingerprint)
export async function retrieveAllRecords() {
  let token = null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
    console.log("Token: ", token);
  } else {
    console.log("token not found");
  }

  const res = await axios.get(getAllFacesEndpoint + "false", {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

  return res.data;
}

// ------------

// Delete a known person from the system
export async function deleteFaceFromSystem(personId) {
  let token = null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  } else {
    console.log("token not found");
  }

  const res = await axios.delete(deleteFacesEndpoint + personId, {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

  return res;
}

// ------------

// Edit a name of a person in the system
export async function editNameInSystem(personId, newName) {
  let postBody = {
    label: newName
  };

  let token = null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  } else {
    console.log("token not found");
  }

  const res = await axios.patch(
    editDetailsEndpoint + `${personId}/label`,
    postBody,
    {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );

  return res;
}

// ------------

// blacklist a person in the system
export async function blacklistPersonInSystem(personId) {
  let token = null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  } else {
    console.log("token not found");
  }

  const res = await axios.patch(editDetailsEndpoint + `${personId}/blacklist`, {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

  return res;
}

// ------------

// whitelist a person in the system
export async function whitelistPersonInSystem(personId) {
  console.log("inside whitelist person");
  let token = null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  } else {
    console.log("token not found");
  }

  const res = await axios.patch(editDetailsEndpoint + `${personId}/whitelist`, {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

  return res;
}

// export const getCoordinates = async() =>{
  
// }
