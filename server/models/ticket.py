from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db

class Ticket(db.Model, SerializerMixin):
    __tablename__ = 'tickets'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)  # Assuming you have an 'Event' model
    purchase_date = db.Column(db.DateTime, server_default=db.func.now())
    # seat_number = db.Column(db.String(50))
    price = db.Column(db.Integer, nullable=False)
    
    user = db.relationship('User', backref=db.backref('tickets', lazy=True))
    # event = db.relationship('Event', backref=db.backref('tickets', lazy=True))  # Assuming you have an 'Event' model

    def __repr__(self):
        return f'Ticket({self.id}, User: {self.user_id}, Event: {self.event_id})'