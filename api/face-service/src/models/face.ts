import mongoose, {Schema} from 'mongoose';

const FaceSchema = new mongoose.Schema({
	id: {
		type: Schema.Types.ObjectId,
	},
	label: {
		type: String,
		trim: true,
		required: true
	},
	blacklisted: {
		type: Boolean,
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		required: true
	},
	lastUpdated: {
		type: Date,
		default: Date.now()
	},
	fingerprints: [Array]
});

export const Face = mongoose.model("Face", FaceSchema);
