from flask import Flask
from flask_login import login_user, logout_user, login_required
from flask_cors import CORS
from expense import *
from projects import *


app = Flask(__name__)
CORS(app)

# Projects Endpoints
# GET projects


@login_required
@app.route('/projects', methods=['GET'])
def get_projects():
    return get_all_projects()


@login_required
@app.route('/projects/<id>', method=['GET'])
def get_all_project_by_id(id):
    success = False
    data = request.get_json()
    print(data)
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        projects = cur.execute("SELECT * from project where user.id = ?", id)
        conn.commit()
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()

    if (success):

        return Response(json.dumps(projects), mimetype="application/json", status=200)
    else:
        return Response(json.dumps({"status": "error"}), mimetype="application/json", status=500)


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


@app.route()
def get_all_projects():
    success = False
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("SELECT * FROM project")
        projects = cur.fetchall()
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()

    if (success):
        result = []
        for aPropect in projects:
            result.append({"id": aPropect[0], "user_id": aPropect[1],
                          "name": aPropect[2], "description": aPropect[3], "budget": aPropect[4]})

        return Response(json.dumps({"status": "success", "data": result}), mimetype="application/json", status=200)
    else:
        return Response(json.dumps({"status": "error"}), mimetype="application/json", status=500)


if __name__ == '__main__':
    app.run(debug=True)
