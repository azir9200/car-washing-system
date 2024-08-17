import mongoose, { Document, Schema } from 'mongoose';

export interface TSlots {
    service: string;
    date: string;
    startTime: string;
    endTime: string;
}

// Define an interface representing a document in MongoDB.
interface Slot extends Document {
    service: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
    createdAt: Date;
    updatedAt: Date;
}

// Create a Schema corresponding to the document interface.
const slotSchema: Schema = new Schema(
    {
        service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
        date: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        isBooked: { type: String, default: 'available' }
    },
    {
        timestamps: true // Automatically manages createdAt and updatedAt fields
    }
);

// Create a Model.
const SlotModel = mongoose.model<Slot>('Slot', slotSchema);

export default SlotModel;
