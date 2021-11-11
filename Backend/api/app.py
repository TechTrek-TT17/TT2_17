from flask import Flask, request
from flask_cors import CORS
from flask_login import LoginManager
from routes import auth_routes
from routes import projects_routes

app = Flask(__name__)
# Allow for cross-domain api call with react front end

# Setup login manager
login = LoginManager(app)

CORS(app)

users = []

# Use blueprint for modularity and url registration
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(projects_routes, url_prefix='/api/projects')
app.register_blueprint(expenses_routes, url_prefix='/api/projects')
