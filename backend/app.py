from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq_helper import ask_ai
import os

app = Flask(
    __name__,
    static_folder="../frontend/dist",
    static_url_path=""
)

CORS(app)

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json

    message = data.get("message")

    response = ask_ai(message)

    return jsonify({
        "reply": response
    })

@app.route("/")
def serve():

    return send_from_directory(
        app.static_folder,
        "index.html"
    )

@app.route("/<path:path>")
def static_proxy(path):

    file_path = os.path.join(
        app.static_folder,
        path
    )

    if os.path.exists(file_path):
        return send_from_directory(
            app.static_folder,
            path
        )

    return send_from_directory(
        app.static_folder,
        "index.html"
    )

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=7860
    )
