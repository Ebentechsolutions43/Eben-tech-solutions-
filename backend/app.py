from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

from database import get_db, init_db

app = Flask(__name__)

# Allow your GitHub Pages frontend to communicate with Render
CORS(app, resources={
    r"/api/*": {
        "origins": "*"
    }
})

# Create database tables
init_db()


# =====================================================
# HOME / HEALTH CHECK
# =====================================================

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "Eben Tech Solutions API is running successfully!"
    }), 200


# =====================================================
# SERVICES
# =====================================================

@app.route("/api/services", methods=["GET"])
def services():

    services_list = [
        "Website Design",
        "Website Development",
        "Software Development",
        "IT Support",
        "Graphic Design",
        "Search Engine Optimization (SEO)",
        "E-commerce Solutions"
    ]

    return jsonify(services_list), 200


# =====================================================
# REGISTER
# =====================================================

@app.route("/api/register", methods=["POST"])
def register():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))

    if not name or not email or not password:
        return jsonify({
            "success": False,
            "message": "Name, email and password are required"
        }), 400

    if len(password) < 6:
        return jsonify({
            "success": False,
            "message": "Password must be at least 6 characters"
        }), 400

    conn = get_db()

    try:

        existing_user = conn.execute(
            "SELECT id FROM users WHERE email = ?",
            (email,)
        ).fetchone()

        if existing_user:
            return jsonify({
                "success": False,
                "message": "An account with this email already exists"
            }), 409

        hashed_password = generate_password_hash(password)

        conn.execute(
            """
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
            """,
            (name, email, hashed_password)
        )

        conn.commit()

        return jsonify({
            "success": True,
            "message": "Account created successfully"
        }), 201

    except Exception as error:

        conn.rollback()

        print("REGISTER ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to create account"
        }), 500

    finally:
        conn.close()


# =====================================================
# LOGIN
# =====================================================

@app.route("/api/login", methods=["POST"])
def login():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))

    if not email or not password:
        return jsonify({
            "success": False,
            "message": "Email and password are required"
        }), 400

    conn = get_db()

    try:

        user = conn.execute(
            """
            SELECT id, name, email, password
            FROM users
            WHERE email = ?
            """,
            (email,)
        ).fetchone()

        if user is None:
            return jsonify({
                "success": False,
                "message": "Invalid email or password"
            }), 401

        if not check_password_hash(user["password"], password):
            return jsonify({
                "success": False,
                "message": "Invalid email or password"
            }), 401

        return jsonify({
            "success": True,
            "message": "Login successful",
            "user": {
                "id": user["id"],
                "name": user["name"],
                "email": user["email"]
            }
        }), 200

    except Exception as error:

        print("LOGIN ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Login failed"
        }), 500

    finally:
        conn.close()


# =====================================================
# CONTACT MESSAGE
# =====================================================

@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not email or not message:
        return jsonify({
            "success": False,
            "message": "All fields are required"
        }), 400

    conn = get_db()

    try:

        conn.execute(
            """
            INSERT INTO messages
            (name, email, message)
            VALUES (?, ?, ?)
            """,
            (name, email, message)
        )

        conn.commit()

        return jsonify({
            "success": True,
            "message": "Message sent successfully"
        }), 201

    except Exception as error:

        conn.rollback()

        print("CONTACT ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to send message"
        }), 500

    finally:
        conn.close()


# =====================================================
# GET A QUOTE
# =====================================================

@app.route("/api/quote", methods=["POST"])
def quote():

    data = request.get_json(silent=True)

    print("QUOTE DATA RECEIVED:", data)

    if not data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    phone = str(data.get("phone", "")).strip()
    service = str(data.get("service", "")).strip()
    budget = str(data.get("budget", "")).strip()
    message = str(data.get("message", "")).strip()

    # Check all fields
    if not name:
        return jsonify({
            "success": False,
            "message": "Full name is required"
        }), 400

    if not email:
        return jsonify({
            "success": False,
            "message": "Email address is required"
        }), 400

    if not phone:
        return jsonify({
            "success": False,
            "message": "Phone number is required"
        }), 400

    if not service:
        return jsonify({
            "success": False,
            "message": "Service is required"
        }), 400

    if not budget:
        return jsonify({
            "success": False,
            "message": "Budget is required"
        }), 400

    if not message:
        return jsonify({
            "success": False,
            "message": "Project description is required"
        }), 400

    conn = get_db()

    try:

        conn.execute(
            """
            INSERT INTO quotes
            (
                name,
                email,
                phone,
                service,
                budget,
                message
            )
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                name,
                email,
                phone,
                service,
                budget,
                message
            )
        )

        conn.commit()

        print("QUOTE SAVED SUCCESSFULLY")

        return jsonify({
            "success": True,
            "message": "Quote request submitted successfully"
        }), 201

    except Exception as error:

        conn.rollback()

        print("QUOTE DATABASE ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to save quote request"
        }), 500

    finally:
        conn.close()


# =====================================================
# TEST QUOTE DATABASE
# =====================================================

@app.route("/api/quotes", methods=["GET"])
def get_quotes():

    conn = get_db()

    try:

        quotes = conn.execute(
            """
            SELECT
                id,
                name,
                email,
                phone,
                service,
                budget,
                message
            FROM quotes
            ORDER BY id DESC
            """
        ).fetchall()

        result = []

        for quote_item in quotes:

            result.append({
                "id": quote_item["id"],
                "name": quote_item["name"],
                "email": quote_item["email"],
                "phone": quote_item["phone"],
                "service": quote_item["service"],
                "budget": quote_item["budget"],
                "message": quote_item["message"]
            })

        return jsonify({
            "success": True,
            "quotes": result
        }), 200

    except Exception as error:

        print("GET QUOTES ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to retrieve quotes"
        }), 500

    finally:
        conn.close()


# =====================================================
# RUN APP
# =====================================================

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=False
    )
