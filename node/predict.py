import sys
import json
import pickle
import pandas as pd

# Load the pre-trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Read data from stdin
json_data = sys.stdin.read()
data = json.loads(json_data)
glucose = [item['Glucose'] for item in data]

# # Perform the prediction
df = pd.DataFrame(glucose, columns=['Glucose'])
predictions = model.predict(df)
print(predictions)
