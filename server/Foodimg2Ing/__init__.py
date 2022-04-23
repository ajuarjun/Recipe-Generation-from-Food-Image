from flask import Flask
from flask_cors import CORS

app = Flask(__name__,template_folder='Templates')
CORS(app)

from Foodimg2Ing import routes
