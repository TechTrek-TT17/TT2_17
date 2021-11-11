from flask import Flask

app = Flask(__name__)


@app.route('/expense/create')
def hello():
    return 'Hello, World!'


@app.route('/expense/read')
def hello():
    return 'Hello, World!'


@app.route('/expense/update')
def hello():
    return 'Hello, World!'


@app.route('/exponse/delete')
def hello():
    return 'Hello, World!'