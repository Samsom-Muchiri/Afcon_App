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
    
    user3 = User(name='Mercy Mochere', email='mochere@yahoo.com', country='Kenya')
    user3.set_password3('password3')
    
    user3 = User(name='Carl Emmanuel', email='carl@yahoo.com', country='Kenya')
    user3.set_password3('password3')

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
    country3 = Country(name='Algeria', coach='Coach 3', star_rating=5, flag_url='https://shorturl.at/defY5', group_stage=group_stage2)
    country4 = Country(name='Kenya', coach='Coach 4', star_rating=3, flag_url='https://shorturl.at/aBHK7', group_stage=group_stage2)



    db.session.add_all([country1, country2, country3, country4])
    db.session.commit()

    # Create sample data for the Player model
    player1 = Player(name='Mostafa', age=25, country=country1)
    player2 = Player(name='Elneny', age=28, country=country1)
    player3 = Player(name='Salah', age=24, country=country1)
    player4 = Player(name='Omar', age=24, country=country1)
    player5 = Player(name='Ibrahim', age=24, country=country1)
    player6 = Player(name='Onana', age=25, country=country2)
    player7 = Player(name='Vincent', age=28, country=country2)
    player8 = Player(name='Song', age=24, country=country2)
    player9 = Player(name='Ekambi', age=24, country=country2)
    player10 = Player(name='Mbeumo', age=24, country=country2)
    player11 = Player(name='Mahrez', age=25, country=country3)
    player12 = Player(name='Touba', age=28, country=country3)
    player13 = Player(name='Atal', age=24, country=country3)
    player14 = Player(name='Delort', age=24, country=country3)
    player15 = Player(name='Zerrouki', age=24, country=country3)
    player16 = Player(name='Oliech', age=25, country=country4)
    player17 = Player(name='Okumu', age=28, country=country4)
    player18 = Player(name='Otieno', age=24, country=country4)
    player19 = Player(name='Olunga', age=24, country=country4)
    player20 = Player(name='Wanyama', age=24, country=country4)
    
    db.session.add_all([player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20])
    db.session.commit()
    

    # Create sample data for the Comment model
    comment1 = Comment(user=user1, content='Comment 1', created_at=datetime.utcnow())
    comment2 = Comment(user=user2, content='Comment 2', created_at=datetime.utcnow())

    db.session.add_all([comment1, comment2])
    db.session.commit()

    print('Complete.')