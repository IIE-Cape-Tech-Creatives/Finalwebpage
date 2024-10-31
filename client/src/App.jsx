import { useState, useEffect } from 'react';
import Login from './Login';

import './App.css';
import axios from 'axios';

const url = "http://localhost:8080";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 

  const [post, setPost] = useState({ date: "", eventName: "", description: "", image: "" });
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // For Volunteer
  const [volunteer, setVolunteer] = useState({ name: "", surname: "", phoneNumber: "" });
  const [volunteers, setVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  // For Newsletter
  const [newsletter, setNewsletter] = useState({ image: "" });
  const [newsletters, setNewsletters] = useState([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);

  const [user, setUser] = useState({ username: "", password: "" });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);



  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchVolunteers();  // Fetch volunteers on load
    fetchNewsletters(); // Fetch newsletters on load
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${url}/`);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get(`${url}/volunteers`);
      setVolunteers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNewsletters = async () => {
    try {
      const response = await axios.get(`${url}/newsletters`);
      setNewsletters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

   // Fetch all users
   const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPost({ ...post, image: base64 });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (selectedPost) {
      await updatePost(selectedPost._id, post);
    } else {
      await createPost(post);
    }
    setPost({ date: "", eventName: "", description: "", image: "" });
    setSelectedPost(null);
  };

  const createPost = async (newPost) => {
    try {
      await axios.post(`${url}/uploads`, newPost);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      await axios.put(`${url}/uploads/${id}`, updatedPost);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${url}/uploads/${id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

   // Handle form submission for users
   const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await updateUser(selectedUser._id, user);
    } else {
      await createUser(user);
    }
    resetUserForm();
  };

  // Create a new user
  const createUser = async (newUser) => {
    try {
      await axios.post(`${url}/user`, newUser);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Update an existing user
  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`${url}/user/${id}`, updatedUser);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/user/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Reset user form
  const resetUserForm = () => {
    setUser({ username: "", password: "" });
    setSelectedUser(null);
  };


  // Volunteer handling
  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    if (selectedVolunteer) {
      await updateVolunteer(selectedVolunteer._id, volunteer);
    } else {
      await createVolunteer(volunteer);
    }
    setVolunteer({ name: "", surname: "", phoneNumber: "" });
    setSelectedVolunteer(null);
  };

  const createVolunteer = async (newVolunteer) => {
    try {
      await axios.post(`${url}/volunteers`, newVolunteer);
      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const updateVolunteer = async (id, updatedVolunteer) => {
    try {
      await axios.put(`${url}/volunteers/${id}`, updatedVolunteer);
      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVolunteer = async (id) => {
    try {
      await axios.delete(`${url}/volunteers/${id}`);
      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  // Newsletter handling
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (selectedNewsletter) {
      await updateNewsletter(selectedNewsletter._id, newsletter);
    } else {
      await createNewsletter(newsletter);
    }
    setNewsletter({ image: "" });
    setSelectedNewsletter(null);
  };

  const createNewsletter = async (newNewsletter) => {
    try {
      await axios.post(`${url}/newsletters`, newNewsletter);
      fetchNewsletters();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNewsletter = async (id, updatedNewsletter) => {
    try {
      await axios.put(`${url}/newsletters/${id}`, updatedNewsletter);
      fetchNewsletters();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNewsletter = async (id) => {
    try {
      await axios.delete(`${url}/newsletters/${id}`);
      fetchNewsletters();
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user); // Store logged-in user data
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        
                <Login onLogin={handleLogin} /> 
                
            ) : (
    <div className="posts-container">
      
      <h1>Posts</h1>
      <form onSubmit={handleSubmitPost} className="post-form">
        <input
          type="date"
          value={post.date}
          onChange={(e) => setPost({ ...post, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Event Name"
          value={post.eventName}
          onChange={(e) => setPost({ ...post, eventName: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          required
        />
        <input
          type="file"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={handleFileUpload}
        />
        <button type="submit" className="submit-button">
          {selectedPost ? "Update Post" : "Create Post"}
        </button>
      </form>

      <div className="gallery">
        {posts.map((p) => (
          <div key={p._id} className="post-item">
            <img src={p.image} alt="Post" />
            <h3>{p.eventName}</h3>
            <p>{new Date(p.date).toLocaleDateString()}</p>
            <p>{p.description}</p>
            <div className="post-actions">
              <button onClick={() => { setPost(p); setSelectedPost(p); }}>Edit</button>
              <button onClick={() => deletePost(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

       {/* Section for User Management */}
       <h1>Users</h1>
      <form onSubmit={handleUserSubmit} className="user-form">
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit" className="submit-button">
          {selectedUser ? "Update User" : "Create User"}
        </button>
      </form>

      {/* List of Users */}
      <div className="user-list">
        {users.map((u) => (
          <div key={u._id} className="user-item">
            <h3>{u.username}</h3>
            <div className="user-actions">
              <button onClick={() => { setUser(u); setSelectedUser(u); }}>Edit</button>
              <button onClick={() => deleteUser(u._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Form */}
      <h1>Volunteers</h1>
      <form onSubmit={handleVolunteerSubmit} className="volunteer-form">
        <input
          type="text"
          placeholder="First Name"
          value={volunteer.name}
          onChange={(e) => setVolunteer({ ...volunteer, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          value={volunteer.surname}
          onChange={(e) => setVolunteer({ ...volunteer, surname: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={volunteer.phoneNumber}
          onChange={(e) => setVolunteer({ ...volunteer, phoneNumber: e.target.value })}
          required
        />
        <button type="submit" className="submit-button">
          {selectedVolunteer ? "Update Volunteer" : "Add Volunteer"}
        </button>
      </form>

      {/* Volunteer List */}
      <div className="user-list">
        {volunteers.map((v) => (
          <div key={v._id} className="volunteer-item">
            <h3>{v.name} {v.surname}</h3>
            <p>Phone: {v.phoneNumber}</p>
            <div className="volunteer-actions">
              <button onClick={() => { setSelectedVolunteer(v); setVolunteer(v); }}>Edit</button>
              <button onClick={() => deleteVolunteer(v._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Form */}
      <h1>Newsletter </h1>
      <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
        <input
          type="file"
          accept=".jpeg, .png, .jpg"
          onChange={async (e) => {
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            setNewsletter({ ...newsletter, image: base64 });
          }}
          required
        />
        <button type="submit" className="submit-button">
          {selectedNewsletter ? "Update Newsletter" : "Upload Newsletter"}
        </button>
      </form>

      {/* Newsletter List */}
      <div className="newsletter-list">
        {newsletters.map((n) => (
          <div key={n._id} className="newsletter-item">
            <img src={n.image} alt="Newsletter" />
            <div className="newsletter-actions">
              <button onClick={() => { setSelectedNewsletter(n); setNewsletter(n); }}>Edit</button>
              <button onClick={() => deleteNewsletter(n._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
     )}
    </div>
  );
}

export default App;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
}
