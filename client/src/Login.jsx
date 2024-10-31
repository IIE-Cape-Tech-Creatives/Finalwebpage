// src/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/navbar/Hero/Hero'
import { Upcoming } from './components/navbar/Upcoming/Upcoming'
import { Experience } from './components/navbar/Experience/Experience'
import { UpdatesAndInsights } from './components/navbar/Updates/UpdatesAndInsights'
import { Programs } from './components/navbar/Programs/Programs'
import { ContactSection } from './components/navbar/contact/ContactSection'
import { MissionSection } from './components/navbar/Mission/MissionSection'
import { Footer } from './components/Footer/Footer'
import './App.css';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdminLoginClick = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setError('');
        setCredentials({ username: '', password: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', credentials);
            if (response.status === 200) {
                onLogin(response.data.user); // Pass the user data back to App
                closeModal();
            }
        } catch (err) {
            setError(err.response?.data.message || 'Something went wrong');
        }
    };

    return (
        <div>
            <Navbar/>
            <Hero />   
            <MissionSection />
            <Upcoming />
            <Experience />
            <UpdatesAndInsights />
            <Programs/>
            <ContactSection/>
            <Footer />

            <div className="login-container">
                <button className="admin-login-button" onClick={handleAdminLoginClick}>Admin Login</button>

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-button" onClick={closeModal}>×</button>
                            <h2>Admin Login</h2>
                            {error && <p className="error">{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
