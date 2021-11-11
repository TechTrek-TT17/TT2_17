from flask_wtf import FlaskForm
from wtforms import StringField
from flask import Flask, json, request, Response
from wtforms.validators import DataRequired, ValidationError
from database import connect_to_db


def user_exists(form, field):
    print("Checking if user exists", field.data)
    try:
        conn = connect_to_db()
        cur = conn.cursor()

        cur.execute("Select user from db where username= ? and password= ?",
                    data["username"], data["password"])
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


class LoginForm(FlaskForm):
    email = StringField('username', validators=[user_exists])
    password = StringField('password')
