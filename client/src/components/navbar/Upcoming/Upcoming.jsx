import React, { useState, useEffect } from "react";
import styles from "./Upcoming.module.css";
import { getImageUrl } from "../../../utils";

export const Upcoming = () => {
  const [posts, setPosts] = useState([]); // Store posts from the database
  const [selectedPost, setSelectedPost] = useState(null);

  // Fallback similar events
  const fallbackPosts = [
    {
      date: "2024-11-25",
      eventName: "Community Eye Care Camp",
      description: "Join us for free eye checkups and consultations.",
      image: getImageUrl("events/eye-care.jpg"),
    },
    {
      date: "2024-12-01",
      eventName: "Therapy Group Session",
      description: "Participate in a group therapy session to improve mental health.",
      image: getImageUrl("events/group-therapy.jpg"),
    },
    {
      date: "2024-12-05",
      eventName: "Volunteer Appreciation Night",
      description: "An evening to celebrate and thank our wonderful volunteers.",
      image: getImageUrl("events/volunteer-night.jpg"),
    },
   
  ];

  // Fetch posts from the database/API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/"); // Replace with your server URL if needed
        const data = await response.json();
        const formattedPosts = data.map((post) => ({
          ...post,
          date: new Date(post.date).toLocaleDateString(), // Format date for better display
        }));
        setPosts(formattedPosts.length > 0 ? formattedPosts : fallbackPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts(fallbackPosts); // Use fallback posts in case of an error
      }
    };

    fetchPosts();
  }, []);

  // Function to determine which image to display based on the selected post
  const getEventImage = () => {
    return selectedPost ? selectedPost.image : getImageUrl("events/event.jpeg"); // Default placeholder image
  };

  return (
    <section className={styles.container} id="events">
      <h2 className={styles.title2}>Izinhlelo Ezizayo</h2>
      <h2 className={styles.title}>Upcoming Events</h2>
      
      <div className={styles.contentWrapper}>
        {/* Image on the left */}
        <div className={styles.imageContainer}>
          <img
            src={getEventImage()}
            alt="Event display"
            className={styles.aboutImage}
          />
        </div>

        {/* Events list on the right */}
        <div className={styles.eventsList}>
          <ul>
            {posts.map((post, index) => (
              <li
                key={index}
                className={styles.eventItem}
                onClick={() => setSelectedPost(post)}
              >
                <h3>{post.date}</h3>
                <h4>{post.eventName}</h4>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
