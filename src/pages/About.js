import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Xplore</h1>
      <p>
        Welcome to Xplore, your ultimate destination for unforgettable travel experiences. We are passionate about creating incredible journeys that connect you with the world's most captivating destinations.
      </p>

      <Carousel />

      <div className="mission-container">
        <h2>Our Mission</h2>
        <p>
          At Xplore, our mission is to inspire and enable people to explore the world. We strive to provide exceptional travel services that exceed our customers' expectations and create lifelong memories.
        </p>
      </div>

      <div className="vision-container">
        <h2>Our Vision</h2>
        <p>
          We envision a world where everyone has the opportunity to discover and appreciate the beauty and diversity of our planet. Through our carefully crafted itineraries and dedicated team, we aim to make travel accessible, enjoyable, and sustainable for all.
        </p>
      </div>

      <div className="team-container">
        <h2>Meet Our Team</h2>
        <p>
          Behind Xplore is a team of experienced travel enthusiasts who are dedicated to curating unique and enriching travel experiences. Our team consists of expert guides, travel planners, and customer support professionals, all working together to ensure your journey is seamless and memorable.
        </p>
      </div>

      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        {/* Add testimonials or customer reviews here */}
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or would like to start planning your next adventure, please don't hesitate to get in touch with us. Our friendly customer support team is available 24/7 to assist you.
        </p>
        {/* Add contact form or contact information here */}
      </div>
    </div>
  );
};

export default About;

