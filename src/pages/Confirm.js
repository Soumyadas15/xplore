import React from 'react';
import '../styles/Confirm.css';

const basePrice = 10000;
const taxRate = 0.18;
const mealPrice = 500;
const luggPrice = 2500;

const calculateFinalPrice = () => {
    const taxAmount = basePrice * taxRate;
    const finalPrice = (basePrice + mealPrice + luggPrice) + taxAmount;
    return finalPrice.toFixed(2);
};

const FinalPricePage = () => {
    const finalPrice = calculateFinalPrice();

    return (
        <div className="final-price-page">
            <h2>Final Price Calculation</h2>
            <div className="price-details">
                <p>Base Price: ₹{basePrice.toFixed(2)}</p>
                <p>Meal Price: ₹{mealPrice.toFixed(2)}</p>
                <p>Luggage Price: ₹{luggPrice.toFixed(2)}</p>
                <p>Tax ({(taxRate * 100).toFixed(0)}%): ₹{(basePrice + mealPrice + luggPrice) * taxRate.toFixed(2)}</p>
                <p className="total-price">Total Price: ₹{finalPrice}</p>
            </div>
        </div>
    );
};

export default FinalPricePage;
