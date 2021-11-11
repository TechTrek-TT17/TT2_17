

from flask import Flask, json, request, Response
from database import connect_to_db
#from db import connect_to_db
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
