from flask import Flask, jsonify

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)
