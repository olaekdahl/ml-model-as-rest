import React, { useState } from 'react';

function DiabetesPrediction() {
  const [number, setNumber] = useState('');
  const [prediction, setPrediction] = useState('');
  const apiUrl = 'http://localhost:3000/predict';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ "Glucose": number }]),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`Output ${data[0]}`);
        setPrediction(data[0] ? 'Yes': 'No');
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Number Prediction Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Glucose Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default DiabetesPrediction;