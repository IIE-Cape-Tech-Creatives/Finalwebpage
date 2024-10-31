import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
    image: { type: String, required: true }
});

export default mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);
