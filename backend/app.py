from flask import Flask, jsonify, request
from database import create_tables, get_db_connection

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


# Contact form API
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received"
        }), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({
            "status": "error",
            "message": "Please fill in all fields"
        }), 400

    connection = get_db_connection()

    connection.execute(
        """
        INSERT INTO messages (name, email, message)
        VALUES (?, ?, ?)
        """,
        (name, email, message)
    )

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Your message has been received!"
    })


if __name__ == "__main__":
    app.run(debug=True)
