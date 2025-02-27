from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os
from rick_codefixer import analyze_and_fix_code  # importez votre fonction existante

app = Flask(__name__)
CORS(app)  # Permet les requêtes cross-origin depuis votre frontend React

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        if not data or 'code' not in data:
            return jsonify({
                'error': "*burp* No code provided! What are you trying to pull here, Morty?"
            }), 400

        # Utilise votre fonction existante
        result = analyze_and_fix_code(data['code'])
        return jsonify(result)

    except Exception as e:
        return jsonify({
            'error': f"*burp* Something went wrong in dimension C-137: {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)