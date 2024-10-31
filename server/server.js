import express from 'express'; 
import connect from './database/conn.js';
import cors from 'cors';

// Import models
import Post from './model/post.model.js';
import User from './model/user.model.js';
import Volunteer from './model/volunteer.model.js';
import Newsletter from './model/newsletter.model.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

/** Connect to the database */
connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    }catch(error){
        console.log("Can't connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database Connection...!")
});

/** POST ROUTES */

// User: Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords (assuming passwords are stored as plain text for simplicity; use hashing in production)
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If username and password match
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
 
// Post: Add a new image to the posts collection
app.post("/uploads", async (req, res) => {
    const body = req.body;
    try {
        const newImage = await Post.create(body);
        await newImage.save();
        res.status(201).json({ msg: "New image uploaded...!" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// User: Add a new user
app.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ msg: "New user added", data: user });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Volunteer: Add a new volunteer
app.post("/volunteers", async (req, res) => {
    const body = req.body;
    try {
        const newVolunteer = await Volunteer.create(body);
        res.status(201).json({ msg: "New volunteer added!", data: newVolunteer });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Newsletter: Add a new newsletter
app.post("/newsletters", async (req, res) => {
    const body = req.body;
    try {
        const newNewsletter = await Newsletter.create(body);
        res.status(201).json({ msg: "New newsletter uploaded!", data: newNewsletter });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

/** GET ROUTES */

// Get all posts
app.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all volunteers
app.get("/volunteers", async (req, res) => {
    try {
        const volunteers = await Volunteer.find({});
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(408).json({ error });
    }
});

// Get all newsletters
app.get("/newsletters", async (req, res) => {
    try {
        const newsletters = await Newsletter.find({});
        res.status(200).json(newsletters);
    } catch (error) {
        res.status(408).json({ error });
    }
});

/** PUT ROUTES */

// Update post
app.put("/uploads/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedImage = await Post.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Image updated successfully", data: updatedImage });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Update user
app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "User updated successfully", data: updatedUser });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Update volunteer
app.put("/volunteers/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedVolunteer = await Volunteer.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Volunteer updated successfully", data: updatedVolunteer });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Update newsletter
app.put("/newsletters/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedNewsletter = await Newsletter.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Newsletter updated successfully", data: updatedNewsletter });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

/** DELETE ROUTES */

// Delete post
app.delete("/uploads/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({ msg: "Image deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Delete user
app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Delete volunteer
app.delete("/volunteers/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Volunteer.findByIdAndDelete(id);
        res.status(200).json({ msg: "Volunteer deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Delete newsletter
app.delete("/newsletters/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Newsletter.findByIdAndDelete(id);
        res.status(200).json({ msg: "Newsletter deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});
