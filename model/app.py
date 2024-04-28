from flask import Flask, request, jsonify
import numpy as np
import joblib
import pickle

app = Flask(__name__)

# Load the general model
loaded_model = joblib.load('general_model.h5')
scaler = joblib.load('general_scaler.h5')

# Load the advance model
with open('advance.pkl', 'rb') as model:
    XB_model = pickle.load(model)
# Load the advance label encoder
with open('advance_label_encoder.pkl', 'rb') as model:
    label_encoder = pickle.load(model)

@app.route('/predict', methods=['POST'])
def predict_crops():
    print("Received a request")
    # Extract data from the request
    data = request.get_json()
    print("Request data:", data)

    # Extract features from the request data
    req_data = data.get('reqdata', [])  # Assuming 'reqdata' key in request JSON
    features = np.array(req_data).reshape(1, -1)

    # Scale the data
    features_scaled = scaler.transform(features)

    # Predict probabilities
    probabilities = loaded_model.predict_proba(features_scaled)[0]

    # Get the top 3 most likely crop indices
    top_indices = probabilities.argsort()[-3:][::-1]

    # Get the top 3 most likely crop names
    top_crops = loaded_model.classes_[top_indices]

    print("Top 3 recommended crops:", top_crops)

    # Respond with the top 3 recommended crops
    return jsonify({"top_crops": list(top_crops)})


@app.route('/advance', methods=['POST'])
def predict():
    # Get the data from the POST request
    data = request.get_json(force=True)

    # Convert the data to a numpy array
    new_data = np.array(data['new_data'],dtype=object)

    # Make prediction using model loaded from disk as per the data
    prediction = XB_model.predict_proba([new_data])[0]

    # Get the indices of the top three crops with the highest probabilities
    top_three_indices = prediction.argsort()[-3:][::-1]

    # Decode the indices back to crop names
    top_three_crops = label_encoder.inverse_transform(top_three_indices)

    # Return the predictions
    return jsonify({'top_crops': top_three_crops.tolist()})

@app.route('/')
def index():
    return 'Hello from Flask!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
