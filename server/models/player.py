from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db
from sqlalchemy.orm import relationship

class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'
    serialize_rules = ('-country.players',)  # Avoid serializing all players when fetching a player.

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False, default=18)  # default age to be 18.
    photo_url = db.Column(db.String(500))  # a rough length for URL.
    country_id = db.Column(db.Integer, db.ForeignKey('countries.id'), nullable=False)

    # Relationship
    country = relationship('Country', backref='players', primaryjoin='Player.country_id == Country.id')

    def __repr__(self):
        return f'Player({self.name}, Country: {self.country_id})'