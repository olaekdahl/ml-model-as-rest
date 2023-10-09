# Import necessary libraries
from flask import Flask, request, jsonify
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Load the Iris dataset and train a Decision Tree model
iris = load_iris()
X, y = iris.data, iris.target
clf = DecisionTreeClassifier()
clf.fit(X, y)

# Create a Flask app
app = Flask(__name__)

# Define a route for making predictions
#curl -X POST -H "Content-Type: application/json" -d '[5.1, 3.5, 1.4, 0.2]' http://localhost:5000/predict
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data as JSON
        data = request.get_json()

        # Ensure data is a list of features
        if not isinstance(data, list):
            return jsonify({'error': 'Input should be a list of features'}), 400

        # Convert data to a NumPy array
        features = np.array(data).reshape(1, -1)

        # Make a prediction
        prediction = clf.predict(features)[0]

        # Map the prediction to a class label
        predicted_class = iris.target_names[prediction]

        return jsonify({'predicted_class': predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)