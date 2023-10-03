from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db
# from sqlalchemy import ForeignKey, Integer, String, Column, Text, DateTime, func
from sqlalchemy.orm import relationship

class City(db.Model, SerializerMixin):
    __tablename__ = 'cities'
    serialize_rules = ('-reviews.city',) 
    
    id = db.Column(db.Integer, primary_key=True)
    city_name = db.Column(db.String(100), nullable=False)
    
    # Relationship with Review
    reviews = relationship('Review', backref='city', lazy=True)

    def __repr__(self):
        return f'City({self.city_name})'
