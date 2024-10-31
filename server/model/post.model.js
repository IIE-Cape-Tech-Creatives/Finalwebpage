import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    image: String, 
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
