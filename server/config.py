import os
class Config:
    # define constant variables for the project 
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI");
    SQLALCHEMY_TRACK_MODIFICATIONS = False