import React, { useState, useRef, useEffect } from "react";
import styles from "./Upcoming.module.css";
import { getImageUrl } from "../../../utils";

export const Upcoming = () => {
  const [posts, setPosts] = useState([]); // Store posts from the database
  const [selectedPost, setSelectedPost] = useState(null);
  const eventsListRef = useRef(null); // Reference to the list container

  // Fetch posts from the database/API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/"); // Replace with your server URL if needed
        const data = await response.json();
        // Ensure date is formatted correctly for display
        const formattedPosts = data.map(post => ({
          ...post,
          date: new Date(post.date).toLocaleDateString(), // Format date for better display
        }));
        setPosts(formattedPosts); // Assuming the data is an array of posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to determine which image to display based on the selected post
  const getEventImage = () => {
    return selectedPost ? selectedPost.image : getImageUrl("events/event.jpeg"); // Default placeholder image
  };

  // Scroll left/right functions
  const scrollLeft = () => {
    if (eventsListRef.current) {
      eventsListRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (eventsListRef.current) {
      eventsListRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container} id="upcoming-events">
      <h2 className={styles.title2}>Izinhlelo Ezizayo</h2>
      <h2 className={styles.title}>Upcoming Events</h2>
      
      <div className={styles.imageContainer}>
        {/* Image that updates based on selected event */}
        <img
          src={getEventImage()}
          alt="Event display"
          className={styles.aboutImage}
        />

        {/* Event list with scroll buttons */}
        <div className={styles.scrollableListContainer}>
          <button className={styles.scrollButton} onClick={scrollLeft}>◀</button>
          
          <ul className={styles.aboutItems} ref={eventsListRef}>
            {posts.map((post, index) => (
              <li key={index} className={styles.aboutItem} onClick={() => setSelectedPost(post)}>
                <h3>{post.date}</h3>
                <p>{post.eventName}</p>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
          
          <button className={styles.scrollButton} onClick={scrollRight}>▶</button>
        </div>
      </div>
    </section>
  );
};
