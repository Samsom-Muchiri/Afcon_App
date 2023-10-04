from app import db 
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.player import Player
from models.comment import Comment
from datetime import datetime
from app import app


with app.app_context():
    
    print('Deleting existing group stages...')
    GroupStage.query.delete()
    
    print('Deleting existing users...')
    User.query.delete()
    
    print('Deleting existing countries...')
    Country.query.delete()
    
    print('Deleting existing player...')
    Player.query.delete()
    
    print('Deleting existing comments...')
    Comment.query.delete()

    # Create sample data for the User model
    print('Creating user objects...')
    user1 = User(name='nate wamzy', email='nate@example.com')
    user1.set_password('password1')

    user2 = User(name='Joy njunguna', email='joy@example.com', country='Canada')
    user2.set_password('password2')

    # Create sample data for the GroupStage model
    print('Creating group_stage objects...')
    group_stage1 = GroupStage(name='Group A')
    group_stage2 = GroupStage(name='Group B')

    # Add the data to the session
    db.session.add_all([user1, user2, group_stage1, group_stage2])
    db.session.commit()

    # Create sample data for the Country model
    country1 = Country(name='Egypt', coach='Coach 1', star_rating=4, flag_url='https://shorturl.at/ekAL8', group_stage=group_stage1)
    country2 = Country(name='Cameron', coach='Coach 2', star_rating=3, flag_url='https://shorturl.at/bAJ67', group_stage=group_stage1)

    db.session.add_all([country1, country2])
    db.session.commit()

    # Create sample data for the Player model
    player1 = Player(name='Riyad', age=25, country=country1)
    player2 = Player(name='Mane', age=28, country=country1)
    player3 = Player(name='Salah', age=24, country=country2)

    db.session.add_all([player1, player2, player3])
    db.session.commit()

    # Create sample data for the Comment model
    comment1 = Comment(user=user1, content='Comment 1', created_at=datetime.utcnow())
    comment2 = Comment(user=user2, content='Comment 2', created_at=datetime.utcnow())

    db.session.add_all([comment1, comment2])
    db.session.commit()

    print('Complete.')