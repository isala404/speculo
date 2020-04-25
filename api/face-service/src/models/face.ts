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
		default : false,
		required : true
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		required: true
	},
	lastUpdated: {
		type: Date,
		default: Date.now(),
		required : true
	},
	fingerprints: {
		type : [Array],
		required : true
	}
});

export const Face = mongoose.model("Face", FaceSchema);
