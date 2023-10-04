from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db
from datetime import datetime
from models.user import User

class Comment(db.Model, SerializerMixin):
    tablename = 'comments'
    serialize_rules = ('-user.password',)  # Avoid serializing sensitive user data when fetching a comment

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationship
    user = db.relationship('User', backref=db.backref('comments', lazy=True))

    def repr(self):
        return f'Comment({self.id}, User: {self.user_id}, Date: {self.created_at})'