from flask import Flask, request, jsonify

app = Flask(__name__)

# Exempel på en enkel GET-route
@app.route('/api/greeting', methods=['GET'])
def greeting():
    return jsonify(message="Hej! Välkommen till mitt API.")

# Exempel på en POST-route som tar emot data
@app.route('/api/add', methods=['POST'])
def add_numbers():
    data = request.get_json()
    num1 = data.get('num1')
    num2 = data.get('num2')
    if num1 is None or num2 is None:
        return jsonify(error="Var vänlig och skicka num1 och num2"), 400
    result = num1 + num2
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
