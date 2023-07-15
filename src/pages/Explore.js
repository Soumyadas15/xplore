import React from 'react';
// import SearchBar from '../components/SearchBar';
import SearchParent from '../components/SearchParent';
import Featured from '../components/Featured';
import Slider1 from '../components/Slider1';
import Slider2 from '../components/Slider2';
import Services from '../components/Services';
import Dest from './Dest';
import Info from '../components/Info';

function Explore() {
  return (
    <>
      <SearchParent />
      <Featured/>
      <Slider1/>
      <Slider2/>
      <Info />
      {/* <Services/> */}
      {/* // <div>Explore</div> */}
      </>
  )
}

export default Explore;