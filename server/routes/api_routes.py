from flask import jsonify, Blueprint, request
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.player import Player
from models.comment import Comment
from models.dbconfig import db
# from flask_cors import CORS
# import os


api_bp = Blueprint('api_bp', __name__)


@api_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [{'id': user.id, 'name': user.name, 'email': user.email} for user in users]
    return jsonify(users_list)

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

@api_bp.route('/comments', methods=['GET'])
def get_comments():
    comments = Comment.query.all()
    return jsonify([comment.to_dict() for comment in comments])

@api_bp.route('/comments/<int:id>', methods=['GET'])
def get_comment(id):
    comment = Comment.query.get_or_404(id)
    return jsonify(comment.to_dict())

@api_bp.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    new_comment = Comment(content=data['content'])
    db.session.add(new_comment)
    db.session.commit()
    return jsonify({'message': 'Comment created successfully'})


@api_bp.route('/comments/<int:id>', methods=['PATCH'])
def update_comment(id):
    comment = Comment.query.get_or_404(id)
    data = request.get_json()
    if 'content' in data:
        comment.content = data['content']
    db.session.commit()
    return jsonify({'message': 'Comment updated successfully'})

@api_bp.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': 'Comment deleted successfully'})

