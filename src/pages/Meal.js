import React, { useState } from 'react';
import '../styles/Meal.css';

const mealOptions = [
  { name: 'Vegeterian Meal', image: 'images/' },
  { name: 'Non-Vegeterian Meal', image: 'images/' },
  { name: 'Fish Meal', image: 'images/' },
  { name: 'Vegan Meal', image: 'images/' },
];

const Meal = () => {
  const [selectedMeal, setSelectedMeal] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleMealChange = (event) => {
    const selectedOption = mealOptions.find((meal) => meal.name === event.target.value);

    if (selectedOption) {
      setSelectedMeal(selectedOption.name);
      setSelectedImage(selectedOption.image);
    } else {
      setSelectedMeal('');
      setSelectedImage('');
    }
  };

  return (
    <div className="flight-meal-select">
      <h2 >Select Your Meal</h2>
      <select onChange={handleMealChange}>
        <option value="">Choose a meal</option>
        {mealOptions.map((meal) => (
          <option key={meal.name} value={meal.name}>
            {meal.name}
          </option>
        ))}
      </select>
      {selectedMeal && (
        <div className="selected-meal">
          <img src={`/images/${selectedImage}`} alt={selectedMeal} />
          <p className='a5'>You have selected: {selectedMeal}</p>
        </div>
      )}
    </div>
  )
};

export default Meal;
