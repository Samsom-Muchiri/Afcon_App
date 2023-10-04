from app import db  
from models import User, Comment, Country, GroupStage, Player
from datetime import datetime

def create_sample_data():
    # Create sample data for the User model
    user1 = User(name='nate wamzy', email='nate@example.com')
    user1.set_password('password1')

    user2 = User(name='Joy njunguna', email='joy@example.com', country='Canada')
    user2.set_password('password2')

    # Create sample data for the GroupStage model
    group_stage1 = GroupStage(name='Group A')
    group_stage2 = GroupStage(name='Group B')

    # Create sample data for the Country model
    country1 = Country(name='Egypt', coach='Coach 1', star_rating=4, flag_url='https://shorturl.at/ekAL8', group_stage=group_stage1)
    country2 = Country(name='Cameron', coach='Coach 2', star_rating=3, flag_url='https://shorturl.at/bAJ67', group_stage=group_stage1)

    # Create sample data for the Player model
    player1 = Player(name='Riyad', age=25, country=country1)
    player2 = Player(name='Mane', age=28, country=country1)
    player3 = Player(name='Salah', age=24, country=country2)
    
    # Create sample data for the Comment model
    comment1 = Comment(user=user1, content='Comment 1', created_at=datetime.utcnow())
    comment2 = Comment(user=user2, content='Comment 2', created_at=datetime.utcnow())

    # Add the data to the session and commit it to the database
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(group_stage1)
    db.session.add(group_stage2)
    db.session.add(country1)
    db.session.add(country2)
    db.session.add(player1)
    db.session.add(player2)
    db.session.add(player3)
    db.session.add(comment1)
    db.session.add(comment2)

    db.session.commit()

if __name__ == '__main__':
    create_sample_data()
