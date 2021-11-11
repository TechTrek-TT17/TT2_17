from flask import Flask
from expense import *


app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'


# Expense Endpoints
@app.route('/expense/update/<id>', methods=['PUT'])
def update_expense(id):
    return update_expense_by_id(id)


@app.route('/expense/delete/<id>', methods=['DELETE'])
def delete_expense(id):
    return delete_expense_by_id(id)


if __name__ == '__main__':
    app.run(debug=True)
