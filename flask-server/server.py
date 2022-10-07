from flask import Flask

app = Flask(__name__)

@app.route("/api")
def api():
    return [
            {
                "id": 0,
                "name": "Cannon"
            },
            {
                "id": 1,
                "name": "ELIIIIIZA"
            }
        ]

if __name__ == "__main__":
    app.run(debug = True)