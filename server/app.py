from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import LoginManager
from models.dbconfig import db
from config import Config
from routes.api_routes import api_bp
from routes.api_authentication import auth_bp
from models.user import User

# app initialization
# app = create_app()

# Create the Flask app
app = Flask(__name__)
app.config.from_object(Config)
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])

# Initialize database
db.init_app(app)
Migrate(app, db)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth_bp.login'

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(api_bp, url_prefix='/api')

# loads the user object 
@app.login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

if __name__ == '__main__':
    app.run(debug=True, port=5555)