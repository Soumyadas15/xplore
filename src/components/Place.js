import React from 'react'
import "../styles/Navbar.css";
import { productData } from "./Data.js";

function Place() {
    const place = productData.map((product) => ({
        name: product.name,
        country: product.country,
        url: product.imageurl,
        description: product.description,
        price: product.price,
      }));
    
  return (
    <div className='placeContainer'>
        
    </div>
  )
}

export default Place