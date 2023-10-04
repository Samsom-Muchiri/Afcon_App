from flask import jsonify, Blueprint
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.player import Player
from models.comment import Comment
# from flask_cors import CORS
# import os


api_bp = Blueprint('api_bp', __name__)


@api_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@api_bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_dict())

@api_bp.route('/group_stages', methods=['GET'])
def get_group_stages():
    stages = GroupStage.query.all()
    return jsonify([stage.to_dict() for stage in stages])

@api_bp.route('/group_stages/<int:id>', methods=['GET'])
def get_group_stage(id):
    stage = GroupStage.query.get_or_404(id)
    return jsonify(stage.to_dict())

@api_bp.route('/countries', methods=['GET'])
def get_countries():
    countries = Country.query.all()
    return jsonify([country.to_dict() for country in countries])

@api_bp.route('/countries/<int:id>', methods=['GET'])
def get_country(id):
    country = Country.query.get_or_404(id)
    return jsonify(country.to_dict())

@api_bp.route('/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    return jsonify([player.to_dict() for player in players])

@api_bp.route('/players/<int:id>', methods=['GET'])
def get_player(id):
    player = Player.query.get_or_404(id)
    return jsonify(player.to_dict())

# @api_bp.route('/reviews', methods=['GET'])
# def get_reviews():
#     reviews = Review.query.all()
#     return jsonify([review.to_dict() for review in reviews])

# @api_bp.route('/reviews/<int:id>', methods=['GET'])
# def get_review(id):
#     review = Review.query.get_or_404(id)
#     return jsonify(review.to_dict())

@api_bp.route('/reviews', methods=['POST'])
def post_review():
    # Implement the review posting logic here
    pass

# @api_bp.route('/reviews/<int:id>', methods=['DELETE'])
# def delete_review(id):
#     # Implement the review deletion logic here
#     pass

@api_bp.route('/comments', methods=['GET'])
def get_comments():
    comments = Comment.query.all()
    return jsonify([comment.to_dict() for comment in comments])

@api_bp.route('/comments/<int:id>', methods=['GET'])
def get_comment(id):
    comment = Comment.query.get_or_404(id)
    return jsonify(comment.to_dict())

@api_bp.route('/comments', methods=['POST'])
def post_comment():
    # Implement the comment posting logic here
    pass

@api_bp.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    # Implement the comment deletion logic here
    pass

# @api_bp.route('/cities', methods=['GET'])
# def get_cities():
#     cities = City.query.all()
#     return jsonify([city.to_dict() for city in cities])

# @api_bp.route('/cities/<int:id>', methods=['GET'])
# def get_city(id):
#     city = City.query.get_or_404(id)
#     return jsonify(city.to_dict())
