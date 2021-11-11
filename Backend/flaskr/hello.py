from flask import Flask
from flask_login import LoginManager,  login_user, logout_user
from expense import *
from projects import *


app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'


# Projects Endpoints
# GET projects
@app.route('/projects', methods=['GET'])
def get_projects():
    return get_all_projects()


# Expense Endpoints
@app.route('/expense/update/<id>', methods=['PUT'])
def update_expense(id):
    return update_expense_by_id(id)


@app.route('/expense/delete/<id>', methods=['DELETE'])
def delete_expense(id):
    return delete_expense_by_id(id)


@app.route("/", methods=["GET", "POST"])
@app.route("/login", methods=["GET", "POST"])
def login():
    success = False
    data = request.get_json()
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        user = cur.execute("Select user from db where username= ? and password= ?",
                           data["username"], data["password"])
        conn.commit()
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()

    if (success):
        login_user(user)
        return Response(json.dumps({"status": "Login success"}), mimetype="application/json", status=200)

    else:
        return Response(json.dumps({"status": " Login error"}), mimetype="application/json", status=500)


@app.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


if __name__ == '__main__':
    app.run(debug=True)
