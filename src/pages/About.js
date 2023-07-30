import React from 'react';
import Cards from '../components/Cards';
import Info from '../components/Info';
import { CardGiftcard, Visibility, CheckCircle } from '@mui/icons-material';

const About = () => {
  return (
    <div style={{ margin: '0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', color: 'black'}}>Developers and Makers</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, margin: '100px', borderRadius: '8px', background: '#e8e8e8' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#ff5f5f' }}>
            <Visibility style={{ marginRight: '10px' }} />
            Our Vision
          </h2>
          <div style={{ background: '#ff5f5f', height: '3px', marginBottom: '10px' }}></div>
          <p style={{ textAlign: 'justify', color: '#444', paddingLeft: '180px', paddingRight: '50px' }}>
          Our vision at Xplore is to revolutionize the way people experience and interact with the world through travel. We envision a future where every traveler can embark on a transformative journey that leaves a positive impact on both the places they visit and the people they meet. Through our innovative technology and commitment to responsible tourism, we aim to connect global travelers to local communities, preserving and celebrating the richness of cultural heritage and natural wonders.
          </p>
        </div>
        <div style={{ flex: 1, margin: '100px', padding: '20px', borderRadius: '8px', background: '#e8e8e8' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#ff5f5f' }}>
            <CardGiftcard style={{ marginRight: '10px' }} />
            Our Mission
          </h2>
          <div style={{ background: '#ff5f5f', height: '3px', marginBottom: '10px' }}></div>
          <p style={{ textAlign: 'justify', color: '#444',  paddingLeft: '180px', paddingRight: '50px'}}>
          At Xplore, our mission is to inspire wanderlust and create unforgettable travel experiences for adventurers and explorers alike. We aim to be the go-to platform for travelers seeking authentic, immersive, and sustainable journeys around the world. By providing a diverse range of travel resources, expert guides, and personalized recommendations, we strive to empower travelers to discover the beauty of our planet while fostering a deeper appreciation for different cultures and environments.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: 'center', margin: '0', color: '#ff5f5f' }}>Meet Our Team</h1>
      <Cards />
      <Info/>
    </div>
  );
};

export default About;