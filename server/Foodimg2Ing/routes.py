from flask import render_template ,url_for,flash,redirect,request, jsonify
from Foodimg2Ing import app
from Foodimg2Ing.output import output
import os

@app.route('/',methods=['GET'])
def home():
    return {"home": "Server running successfully"}

@app.route('/',methods=['POST','GET'])
def predict():
    print("test")
    imagefile=request.files['imagefile']
    image_path=os.path.join(app.root_path,'static\\images\\demo_imgs',imagefile.filename)
    imagefile.save(image_path)
    img="/images/demo_imgs/"+imagefile.filename
    title,ingredients,recipe = output(image_path)
    return jsonify({"title":title, "ingredients":ingredients, "recipe":recipe})
