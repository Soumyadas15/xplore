/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import '../styles/Luggage.css';

const MAX_WEIGHT = 15;
const EXCESS_FEE_PER_KG = 500;

function LuggageWeightChecker() {
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const checkWeight = () => {
        const parsedWeight = parseFloat(weight);

        if (isNaN(parsedWeight) || parsedWeight <= 0) {
            setResult('Please enter a valid weight in kgs.');
            return;
        }

        if (parsedWeight <= MAX_WEIGHT) {
            setResult('Luggage weight within the allowed limit.');
        } else {
            const excessWeight = parsedWeight - MAX_WEIGHT;
            const feeAmount = excessWeight * EXCESS_FEE_PER_KG;
            setResult(`Excess weight: ${excessWeight} kgs. You need to pay ₹${feeAmount} extra as an excess weight fee.`);
        }
    };

    return (
        <>
            <div className="App">
                <h1>Luggage Weight Checker</h1>
                <label htmlFor="weight">Enter luggage weight (in kgs):</label>
                <input
                    type="number"
                    id="weight"
                    step="1"
                    value={weight}
                    onChange={handleWeightChange}
                />
                <button onClick={checkWeight}>Check Weight</button>
                <p id="result">{result}</p>
            </div>
        </>
    );
}

export default LuggageWeightChecker;
