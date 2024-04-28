from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load the saved model
loaded_model = joblib.load('modelnew.h5')
scaler = joblib.load('scaler.h5')


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


@app.route('/')
def index():
    return 'Hello from Flask!'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
