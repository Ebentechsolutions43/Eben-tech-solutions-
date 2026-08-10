from flask import Flask, jsonify
from database import create_tables

app = Flask(__name__)

# Create database tables
create_tables()


@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "Eben Tech Solutions Backend is Working!"
    })


@app.route("/api/status")
def status():
    return jsonify({
        "status": "online",
        "service": "Eben Tech Solutions API"
    })


if __name__ == "__main__":
    app.run(debug=True)
