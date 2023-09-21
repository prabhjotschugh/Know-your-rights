from flask import Flask, request, jsonify
from flask_cors import CORS
import traceback
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"

messages = []

def send_message(role, content):
    messages.append({"role": role, "content": content})

system_msg = "I am asking some law questions, give a reply in easy language but with complete information in the context of India within 50 words"
send_message("system", system_msg)

@app.route("/")
def index():
    return "Welcome to chatbot server"

@app.route('/chat', methods=['POST','GET'])
def chat():
    try:
        # Parse JSON data from the request
        data = request.get_json()

        user_message = data.get('content')
        send_message("user", user_message)

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages)

        reply = response["choices"][0]["message"]["content"]
        send_message("assistant", reply)

        return jsonify({"reply": reply})
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True)
