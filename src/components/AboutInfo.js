import React from 'react';
import '../styles/AboutInfo.css';
import { FaUsers, FaGlobe, FaHeart } from "react-icons/fa";

const AboutInfo = () => {
  return (
    <div className='about-info'>
      <div className='vision'>
        <FaGlobe className='icon-out' />
        <div className='texts'>
          <span className='upper'>Our Vision</span>
          <span className='lower'>
            Transforming Travel Experience
          </span>
        </div>
      </div>
      <div className='mission'>
        <FaHeart className='icon-out' />
        <div className='texts'>
          <span className='upper'>Our Mission</span>
          <span className='lower'>
            10M+ Happy Customers, 500+ Top Hotels
          </span>
        </div>
      </div>
      <div className='values'>
        <FaUsers className='icon-out' />
        <div className='texts'>
          <span className='upper'>Our Values</span>
          <span className='lower'>
            Customer-Centric, Sustainable Approach
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;