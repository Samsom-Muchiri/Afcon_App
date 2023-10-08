from flask import Flask, jsonify,request
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import LoginManager
from models.dbconfig import db
from config import Config
from routes.api_routes import api_bp
from routes.api_authentication import auth_bp
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.comment import Comment
from models.player import Player 

# app initialization
# app = create_app()

# Create the Flask app
app = Flask(__name__)
app.config.from_object(Config)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])
# CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Initialize database
db.init_app(app)
Migrate(app, db)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth_bp.login'

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(api_bp)

# loads the user object 
@app.login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Routes to retrieve data
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [{'id': user.id, 'name': user.name, 'email': user.email} for user in users]
    return jsonify(users_list)

@app.route('/groups', methods=['GET'])
def get_groups():
    groups = GroupStage.query.all()
    groups_list = [{'id': group.id, 'name': group.name} for group in groups]
    return jsonify(groups_list)

@app.route('/countries', methods=['GET'])
def get_countries():
    countries = Country.query.all()
    countries_list = [{'id': country.id, 'name': country.name, 'coach': country.coach} for country in countries]
    return jsonify(countries_list)

@app.route('/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    players_list = [{'id': player.id, 'name': player.name, 'age': player.age} for player in players]
    return jsonify(players_list)

@app.route('/comments', methods=['GET'])
def get_comments():
    comments = Comment.query.all()
    comments_list = [{'id': comment.id, 'user_id': comment.user_id, 'content': comment.content} for comment in comments]
    return jsonify(comments_list)

# Routes to create data
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(name=data['name'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'})

@app.route('/groups', methods=['POST'])
def create_group(): 
    data = request.get_json()
    new_group = GroupStage(name=data['name'])
    db.session.add(new_group)
    db.session.commit()
    return jsonify({'message': 'Group created successfully'})

@app.route('/countries', methods=['POST'])
def create_country():
    data = request.get_json()
    new_country = Country(name=data['name'], coach=data['coach'], star_rating=data['star_rating'], flag_url=data['flag_url'], group_stage_id=data['group_stage_id'])
    db.session.add(new_country)
    db.session.commit()
    return jsonify({'message': 'Country created successfully'})

@app.route('/players', methods=['POST'])
def create_player():
    data = request.get_json()
    new_player = Player(name=data['name'], age=data['age'], country_id=data['country_id'])
    db.session.add(new_player)
    db.session.commit()
    return jsonify({'message': 'Player created successfully'})

@app.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    new_comment = Comment(user_id=data['user_id'], content=data['content'])
    db.session.add(new_comment)
    db.session.commit()
    return jsonify({'message': 'Comment created successfully'})


# Routes to update data
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.name = data['name']
    user.email = data['email']
    user.password = data['password']
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

@app.route('/groups/<int:group_id>', methods=['PUT'])
def update_group(group_id):
    group = GroupStage.query.get_or_404(group_id)
    data = request.get_json()
    group.name = data['name']
    db.session.commit()
    return jsonify({'message': 'Group updated successfully'})

@app.route('/countries/<int:country_id>', methods=['PUT'])
def update_country(country_id):
    country = Country.query.get_or_404(country_id)
    data = request.get_json()
    country.name = data['name']
    country.coach = data['coach']
    country.star_rating = data['star_rating']
    country.flag_url = data['flag_url']
    country.group_stage_id = data['group_stage_id']
    db.session.commit()
    return jsonify({'message': 'Country updated successfully'})

@app.route('/players/<int:player_id>', methods=['PUT'])
def update_player(player_id):
    player = Player.query.get_or_404(player_id)
    data = request.get_json()
    player.name = data['name']
    player.age = data['age']
    player.country_id = data['country_id']
    db.session.commit()
    return jsonify({'message': 'Player updated successfully'})

@app.route('/comments/<int:comment_id>', methods=['PUT'])
def update_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    data = request.get_json()
    comment.content = data['content']
    db.session.commit()
    return jsonify({'message': 'Comment updated successfully'})

# Routes to delete data
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

@app.route('/groups/<int:group_id>', methods=['DELETE'])
def delete_group(group_id):
    group = GroupStage.query.get_or_404(group_id)
    db.session.delete(group)
    db.session.commit()
    return jsonify({'message': 'Group deleted successfully'})

@app.route('/countries/<int:country_id>', methods=['DELETE'])
def delete_country(country_id):
    country = Country.query.get_or_404(country_id)
    db.session.delete(country)
    db.session.commit()
    return jsonify({'message': 'Country deleted successfully'})

@app.route('/players/<int:player_id>', methods=['DELETE'])
def delete_player(player_id):
    player = Player.query.get_or_404(player_id)
    db.session.delete(player)
    db.session.commit()
    return jsonify({'message': 'Player deleted successfully'})

@app.route('/comments/<int:comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': 'Comment deleted successfully'})


# Define similar routes for deleting groups, countries, players, and comments


if __name__ == '__main__':
    app.run(debug=True, port=5555)