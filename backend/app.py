from flask import Flask, request, jsonify
from flask_cors import CORS
from groq_helper import ask_ai

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json

    message = data.get("message")

    response = ask_ai(message)

    return jsonify({
        "reply": response
    })

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
