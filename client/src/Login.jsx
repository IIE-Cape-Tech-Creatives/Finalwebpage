// src/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import { AboutUs } from './components/AboutUs/AboutUs';
import { Hero } from './components/navbar/Hero/Hero'
import { Upcoming } from './components/navbar/Upcoming/Upcoming'
import { Experience } from './components/navbar/Experience/Experience'
import { UpdatesAndInsights } from './components/navbar/Updates/UpdatesAndInsights'
import { Programs } from './components/navbar/Programs/Programs'
import { ContactSection } from './components/navbar/contact/ContactSection'
import { MissionSection } from './components/navbar/Mission/MissionSection'
import { Footer } from './components/Footer/Footer'
import {SupportersSection } from './components/navbar/Supporters/SupportersSection'
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
      
           <Router>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      
      {/* Render other sections only if not on /about-us */}
      {!isAboutUsPage && (
        <>
          <Hero />
          <MissionSection />
          <Upcoming />
          <Experience />
          <UpdatesAndInsights />
          <Programs />
          <SupportersSection />
          <ContactSection />
        </>
      )}

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
            

           
    );
};

export default Login;
