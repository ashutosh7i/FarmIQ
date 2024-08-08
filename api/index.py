from flask import Flask, request, jsonify
import numpy as np
import joblib
from os.path import join

app = Flask(__name__)

# Load the models
loaded_model = joblib.load(join("data", "general_model.h5"))
scaler = joblib.load(join("data", "general_scaler.h5"))

# Load additional models
with open(join("data", "advance.pkl"), "rb") as f:
    XB_model = joblib.load(f)
with open(join("data", "advance_label_encoder.pkl"), "rb") as f:
    label_encoder = joblib.load(f)

@app.route("/api/predict", methods=["POST"])
def predict_crops():
    data = request.get_json()
    features = np.array(data.get("reqdata", [])).reshape(1, -1)
    features_scaled = scaler.transform(features)
    probabilities = loaded_model.predict_proba(features_scaled)[0]
    top_indices = probabilities.argsort()[-3:][::-1]
    top_crops = loaded_model.classes_[top_indices]
    return jsonify({"top_crops": top_crops.tolist()})

@app.route("/api/advance", methods=["POST"])
def predict():
    data = request.get_json(force=True)
    new_data = np.array(data["new_data"], dtype=object)
    prediction = XB_model.predict_proba([new_data])[0]
    top_three_indices = prediction.argsort()[-3:][::-1]
    top_three_crops = label_encoder.inverse_transform(top_three_indices)
    return jsonify({"top_crops": top_three_crops.tolist()})

@app.route("/api/")
def index():
    return "Hello from Flask!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)


# from flask import Flask, request, jsonify
# import numpy as np
# import joblib
# import pickle
# from os.path import join
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address

# app = Flask(__name__)

# # Initialize Flask-Limiter
# limiter = Limiter(
#     get_remote_address,
#     app=app,
#     default_limits=["400 per day", "60 per hour"]
# )

# # Custom error handler for rate limiting
# @app.errorhandler(429)
# def ratelimit_handler(e):
#     return jsonify(error="ratelimit exceeded", message=str(e.description)), 429

# # Load the general model
# loaded_model = joblib.load(join("data", "general_model.h5"), "r")
# scaler = joblib.load(join("data", "general_scaler.h5"), "r")

# # Load the advance model
# with open(join("data", "advance.pkl"), "rb") as model:
#     XB_model = pickle.load(model)
# # Load the advance label encoder
# with open(join("data", "advance_label_encoder.pkl"), "rb") as model:
#     label_encoder = pickle.load(model)


# @app.route("/api/predict", methods=["POST"])
# @limiter.limit("10 per minute")  # Apply rate limiting to this endpoint
# def predict_crops():
#     print("Received a request")
#     # Extract data from the request
#     data = request.get_json()
#     print("Request data:", data)

#     # Extract features from the request data
#     req_data = data.get("reqdata", [])  # Assuming 'reqdata' key in request JSON
#     features = np.array(req_data).reshape(1, -1)

#     # Scale the data
#     features_scaled = scaler.transform(features)

#     # Predict probabilities
#     probabilities = loaded_model.predict_proba(features_scaled)[0]

#     # Get the top 3 most likely crop indices
#     top_indices = probabilities.argsort()[-3:][::-1]

#     # Get the top 3 most likely crop names
#     top_crops = loaded_model.classes_[top_indices]

#     print("Top 3 recommended crops:", top_crops)

#     # Respond with the top 3 recommended crops
#     return jsonify({"top_crops": list(top_crops)})


# @app.route("/api/advance", methods=["POST"])
# @limiter.limit("10 per minute")  # Apply rate limiting to this endpoint
# def predict():
#     # Get the data from the POST request
#     data = request.get_json(force=True)

#     # Convert the data to a numpy array
#     new_data = np.array(data["new_data"], dtype=object)

#     # Make prediction using model loaded from disk as per the data
#     prediction = XB_model.predict_proba([new_data])[0]

#     # Get the indices of the top three crops with the highest probabilities
#     top_three_indices = prediction.argsort()[-3:][::-1]

#     # Decode the indices back to crop names
#     top_three_crops = label_encoder.inverse_transform(top_three_indices)

#     # Return the predictions
#     return jsonify({"top_crops": top_three_crops.tolist()})


# @app.route("/api/")
# def index():
#     return "Hello from Flask!"


# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=80)

# Flask==3.0.0
# joblib==1.4.0
# numpy==1.26.4
# scikit-learn==1.2.2
# xgboost==2.0.3
# Flask-Limiter
