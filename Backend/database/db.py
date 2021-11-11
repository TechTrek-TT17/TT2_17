import sqlite3


def connect_to_db():
    conn = sqlite3.connect('data.sqlite')
    return conn
