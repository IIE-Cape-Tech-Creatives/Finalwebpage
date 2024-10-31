import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

export default mongoose.models.Volunteer || mongoose.model('Volunteer', volunteerSchema);
