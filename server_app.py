# Folder: server/
# File: app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import random

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read()))

    # Simulated prediction (replace this with real model logic)
    prediction = random.choice(['Buy', 'Sell'])

    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
