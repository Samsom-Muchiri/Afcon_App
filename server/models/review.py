# from sqlalchemy_serializer import SerializerMixin
# from .dbconfig import db
# from sqlalchemy import ForeignKey, Integer, String, Column, Text, DateTime, func
# from sqlalchemy.orm import relationship


# class Review(db.Model, SerializerMixin):
#     __tablename__ = 'reviews'
#     serialize_rules = ('-city.reviews',) 
    
#     id = Column(Integer, primary_key=True)
#     content = Column(Text, nullable=False)
#     created_at = Column(DateTime, default=func.now())
#     user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
#     city_id = Column(Integer, ForeignKey('cities.id'), nullable=False)
    
#     # Relationship with User
#     user = relationship('User', backref='reviews', lazy=True)

#     def __repr__(self):
#         return f'Review({self.id}, City: {self.city_id}, User: {self.user_id})'