import axios from "axios";
import {COMPARATOR_URL} from "../constants/face.constants";

export class ComparatorService {
	/** This method sends the saved face data to the comparator for it to store it in it's memory for processing */
	public sendFaceData(id: string, fingerprint: number[]) {
		let data = {
			'id': id,
			'fingerprint': fingerprint
		}

		axios.post(`${COMPARATOR_URL}:addFace`, data).then(function (response) {
			console.log(`Successfully added face data to the face comparator's memory!`);
		}).catch(function (error) {
			console.log(`There was an error in adding the face data to the face comparator's memory. | ${error}`);
		});
	}

	/** This method resets the comparator's memory due to a deletion or update */
	public restartComparator() {

		axios.post(`${COMPARATOR_URL}:reset`).then(function (response) {
			console.log(`Successfully restarted the face comparator's memory!`);
		}).catch(function (error) {
			console.log(`There was an error in restarting the face comparator's memory. | ${error}`);
		});
	}
}