import React, { useState } from "react";
import axios from 'axios';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleLoginClick = () => setIsLoginModalOpen(true);
    const closeModal = () => setIsLoginModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', credentials);
            if (response.status === 200) {
                closeModal();  // Close modal on successful login
                // Optionally handle login state if needed
            }
        } catch (err) {
            setError(err.response?.data.message || 'Something went wrong');
        }
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Phumlani Dube Foundation
            </a>

            <div className={styles.menu}>
                <div className={styles.socialIcons}>
                    <img src={getImageUrl("icons/facebook.png")} alt="Facebook" className={styles.icon} />
                    <img src={getImageUrl("icons/gmail.png")} alt="Gmail" className={styles.icon} />
                    <img src={getImageUrl("icons/youtube.png")} alt="YouTube" className={styles.icon} />
                </div>

                {/* Sign Up and Login Buttons */}
               
            </div>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                        <h2>Login</h2>
                        {error && <p className={styles.error}>{error}</p>}
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
        </nav>
    );
};
