from flask import Flask, jsonify, request
from database import get_db
from flask_cors import CORS
from database import get_db, init_db

app = Flask(__name__)
CORS(app)

# Create database/table if it doesn't exist
init_db()


@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "Eben Tech Solutions Backend is Working!"
    })


@app.route("/api/services")
def services():
    return jsonify({
        "services": [
            "Web Design",
            "Software Development",
            "E-commerce",
            "SEO",
            "IT Support"
        ]
    })
@app.route("/api/contact", methods=["POST"])
def api_contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({
            "status": "error",
            "message": "All fields are required"
        }), 400

    conn = get_db()

    conn.execute(
        "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
        (name, email, message)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "status": "success",
        "message": "Message received successfully!"
    })


if __name__ == "__main__":
    app.run(debug=True)
