from flask import Flask, json, request, Response
from db import connect_to_db
import datetime


#function to get expense
def get_expense_by_id(id):
    success = False
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("SELECT * FROM expense WHERE id = ?",id)
        result = cur.fetchone()
        success = True
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        conn.close()
    if success:
        expense_data = []
        for item in result:
                expense_data.append({str(item[0])})
        return Response(json.dumps({"status": "success","data":expense_data}), mimetype="application/json", status=200)


# Function to update expense
# data needed: id, expense_name, description, amount, user_name
def update_expense_by_id(id):
    success = False
    data = request.get_json()
    print(data)
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("UPDATE expense SET name= ?, description= ?, amount=?, updated_by=?, updated_at=? WHERE id=?",
                    (data["name"], data["description"], data["amount"], data["updated_by"], datetime.datetime.now(),
                    id,))
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

# Function to delete expense
# data needed: id
def delete_expense_by_id(id):
    success = False
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("DELETE FROM expense WHERE id=?", (id,))
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
