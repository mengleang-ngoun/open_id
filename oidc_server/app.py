import os
from dotenv import load_dotenv
from website.app import create_app


app = create_app({
    'SECRET_KEY': 'secret',
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
    'SQLALCHEMY_DATABASE_URI': os.getenv("SQLALCHEMY_DATABASE_URI"),
})


@app.cli.command()
def initdb():
    from website.models import db
    db.create_all()
