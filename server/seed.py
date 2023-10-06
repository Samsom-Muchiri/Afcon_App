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
    user1 = User(name='nate wamzy', email='nate@example.com', country='Rwanda')
    user1.set_password('password1')

    user2 = User(name='Joy njunguna', email='joy@example.com', country='Canada')
    user2.set_password('password2')
    
    user3 = User(name='Mercy Mochere', email='mochere@yahoo.com', country='Kenya')
    user3.set_password('password3')
    
    user4 = User(name='Carl Emmanuel', email='carl@yahoo.com', country='Tanzania')
    user4.set_password('password4')

    # Create sample data for the GroupStage model
    print('Creating group_stage objects...')
    group_stage1 = GroupStage(name='Group A')
    group_stage2 = GroupStage(name='Group B')

    # Add the data to the session
    db.session.add_all([user1, user2, user3, user4, group_stage1, group_stage2])
    db.session.commit()

    # Create sample data for the Country model
    country1 = Country(name='Egypt', coach='Coach 1', star_rating=4, flag_url='https://shorturl.at/ekAL8', group_stage=group_stage1)
    country2 = Country(name='Cameron', coach='Coach 2', star_rating=3, flag_url='https://shorturl.at/bAJ67', group_stage=group_stage1)
    country3 = Country(name='Algeria', coach='Coach 3', star_rating=5, flag_url='https://shorturl.at/defY5', group_stage=group_stage2)
    country4 = Country(name='Kenya', coach='Coach 4', star_rating=3, flag_url='https://shorturl.at/aBHK7', group_stage=group_stage2)



    db.session.add_all([country1, country2, country3, country4])
    db.session.commit()

    # Create sample data for the Player model
    player1 = Player(name='Mostafa', age=25, country=country1, photo_url='https://tinyurl.com/4tpfujbv')
    player2 = Player(name='Elneny', age=28, country=country1, photo_url='https://tinyurl.com/4kfzeteb')
    player3 = Player(name='Salah', age=24, country=country1, photo_url='https://tinyurl.com/4hv6ndsy')
    player4 = Player(name='Omar', age=24, country=country1, photo_url='https://tinyurl.com/yckv9u5h')
    player5 = Player(name='Ibrahim', age=24, country=country1, photo_url='https://tinyurl.com/bdfe7ant')
    player6 = Player(name='Onana', age=25, country=country2, photo_url='https://tinyurl.com/5e3rxv7w')
    player7 = Player(name='Vincent', age=28, country=country2, photo_url='https://tinyurl.com/2teevekw')
    player8 = Player(name='Song', age=24, country=country2, photo_url='https://tinyurl.com/yjaf6hw4')
    player9 = Player(name='Ekambi', age=24, country=country2, photo_url='https://tinyurl.com/55yakfzd')
    player10 = Player(name='Mbeumo', age=24, country=country2, photo_url='https://shorturl.at/fuJS6')
    player11 = Player(name='Mahrez', age=25, country=country3, photo_url='https://shorturl.at/gsEFI')
    player12 = Player(name='Touba', age=28, country=country3, photo_url='https://shorturl.at/iAJSZ')
    player13 = Player(name='Atal', age=24, country=country3, photo_url='https://shorturl.at/vzPUZ')
    player14 = Player(name='Delort', age=24, country=country3, photo_url='https://shorturl.at/pzE25')
    player15 = Player(name='Zerrouki', age=24, country=country3, photo_url='https://shorturl.at/DGW16')
    player16 = Player(name='Oliech', age=25, country=country4, photo_url='https://shorturl.at/knRY7')
    player17 = Player(name='Okumu', age=28, country=country4, photo_url='https://shorturl.at/ksHJ7')
    player18 = Player(name='Otieno', age=24, country=country4, photo_url='https://shorturl.at/ilmJ1')
    player19 = Player(name='Olunga', age=24, country=country4, photo_url='https://shorturl.at/byFGP')
    player20 = Player(name='Wanyama', age=24, country=country4, photo_url='https://shorturl.at/asFX0')
    
    db.session.add_all([player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20])
    db.session.commit()
    

    # Create sample data for the Comment model
    comment1 = Comment(user=user1, content="Kampala has really upped its game in terms of infrastructure for the AFCON. Kudos!", created_at=datetime.utcnow())
    comment2 = Comment(user=user1, content="Kasarani's stadium atmosphere is electrifying! Nothing beats watching a match there.", created_at=datetime.utcnow())
    comment3 = Comment(user=user1, content="The Egypt squad is young and energetic. The future looks bright for them.", created_at=datetime.utcnow())
    comment4 = Comment(user=user2, content="Loved the cultural festivals in Kisumu during match days. It added so much vibrancy to the event.", created_at=datetime.utcnow())
    comment5 = Comment(user=user2, content="Algeria's team looks stronger than ever. Can't wait to see them in the finals.", created_at=datetime.utcnow())
    comment6 = Comment(user=user2, content='Nairobi has blended the historical with the modern so well for this AFCON. The fan zones near the old medina are a treat.', created_at=datetime.utcnow())
    comment7 = Comment(user=user3, content='Cameroon has always had a special team in AFCON history. Hope they shine this year too.', created_at=datetime.utcnow())
    comment8 = Comment(user=user3, content="Atal has been a wall in defense for Morocco. Opponents can't get past him.", created_at=datetime.utcnow())
    comment9 = Comment(user=user3, content="Sadio Mané is Senegal's pride. His dribbling skills had me at the edge of my seat.", created_at=datetime.utcnow())
    comment10 = Comment(user=user4, content="Mohamed Salah's performance last night was world-class. Egypt has a gem!", created_at=datetime.utcnow())
    
    
    

    db.session.add_all([comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9, comment10])
    db.session.commit()

    print('Complete.')