

from flask import Flask, json, request, Response
from database import db,connect_to_db()

import datetime

# Function to update expense
# data needed: id, expense_name, description, amount, user_name


def get_all_project_by_id(id):
    success = False
    data = request.get_json()
    print(data)
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("SELECT * from projects where user.id =?",
                    id)
        conn.commit()
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()

    if (success):
        return Response(json.dumps({"status": "success"}), mimetype="application/json", status=200)
    else:
        return Response(json.dumps({"status": "error"}), mimetype="application/json", status=500)

    # Function to get all entries from projects table


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
