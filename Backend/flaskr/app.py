from flask import Flask
from flask_login import login_user, logout_user, login_required
from flask_cors import CORS, cross_origin
from expense import *
from projects import *
from db import connect_to_db


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Projects Endpoints
# GET projects


@login_required
@app.route('/projects', methods=['GET'])
def get_projects():
    return get_all_projects()


# @login_required
@app.route('/projects/<id>', methods=['GET'])
def get_all_project_by_id(id):
    return get_all_project_by_id(id)


# Expense Endpoints
@login_required
@app.route('/expense/update/<id>', methods=['PUT'])
def update_expense(id):
    return update_expense_by_id(id)


@login_required
@app.route('/expense/delete/<id>', methods=['DELETE'])
def delete_expense(id):
    return delete_expense_by_id(id)


@login_required
@cross_origin
# @app.route("/", methods=["GET", "POST"])
@app.route("/login", methods=["GET", "POST"])
def login():
    success = False
    data = request.get_json()
    print(request.data)
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("Select * from user where username= ? and password= ?",
                    (data["username"], data["password"]))
        user = cur.fetchone()
        conn.commit()
        print(user)
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()

    if (success):

        # login_user(user[0])
        return Response(json.dumps(user), mimetype="application/json", status=200)

    else:
        return Response(json.dumps({"status": " Login error"}), mimetype="application/json", status=500)


@login_required
@app.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


if __name__ == '__main__':
    app.run(debug=True)
