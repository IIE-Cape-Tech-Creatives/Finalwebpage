import mongoose from 'mongoose';

export default async function connect() {
    const mongoUri = ''; // replace with your actual connection string

    try {
        await mongoose.connect(mongoUri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            dbName: "PhumulaniDude" 
        });
        console.log(`MongoDB successfully connected to ${mongoUri}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
}
