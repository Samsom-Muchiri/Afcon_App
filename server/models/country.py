from sqlalchemy import CheckConstraint, and_
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db

class Country(db.Model, SerializerMixin):
    tablename = 'countries'
    serialize_rules = ('-players',)  # Assuming you don't want to serialize associated players by default
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    coach = db.Column(db.String(100), nullable=False, unique=True)
    star_rating = db.Column(db.Integer, nullable=False)
    flag_url = db.Column(db.String(500), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('group_stage.id'), nullable=False)
    
    # Relationships
    group_stage = relationship('GroupStage', backref='countries')
    players = relationship('Player', backref='country', lazy='dynamic')
    
    # Constraints
    table_args = (
        CheckConstraint(star_rating.between(1, 5), name='check_star_rating_range'),
        CheckConstraint(and_(flag_url.startswith('http://'), flag_url.startswith('https://')), name='check_valid_url')
    )
    
    def repr(self):
        return f'Country({self.name})'