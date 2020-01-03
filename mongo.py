from flask import Flask, jsonify, request, json
from flask_pymongo  import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'thecountryfood'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/thecountryfood'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=['POST'])
def register():
    users = mongo.db.users
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    contact = request.get_json()['contact']
    usertype = request.get_json()['usertype']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
	'first_name' : first_name, 
	'last_name' : last_name, 
	'email' : email,
    'contact' : contact,
    'usertype' : usertype, 
	'password' : password, 
	'created' : created, 
	})
    new_user = users.find_one({'_id' : user_id})

    result = {'email' : new_user['email'] + ' registered'}

    return jsonify({'result' : result})
	

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""
	
    response = users.find_one({'email' : email})

    if response:	
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
			    'first_name': response['first_name'],
				'last_name': response['last_name'],
				'email': response['email']}
				)
            result = access_token
        else:
            result = jsonify({"error":"Invalid username and password"})            
    else:
        result = jsonify({"result":"No results found"})
    return result


@app.route('/users/contactus', methods=['POST'])
def contactus():
    users = mongo.db.contactus
    first_name = request.get_json()['first_name']
    comment = request.get_json()['comment']
    email = request.get_json()['email']
    contact = request.get_json()['contact']
    created = datetime.utcnow()

    user_id = users.insert({
        'first_name': first_name,
        'comment': comment,
        'email': email,
        'contact': contact,
        'created': created,
    })
    new_user = users.find_one({'_id': user_id})

    result = {'email': new_user['email'] + ' send.'}

    return jsonify({'result': result})


@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    tasks = mongo.db.contactus

    result = []

    for field in tasks.find():
        result.append({'_id': str(field['_id']), 'first_name': field['first_name'], 'comment': field['comment']})
    return jsonify(result)


@app.route('/detailmenu/api/getdishid/<id>', methods=['GET'])
def getdishid(id):
    tasks = mongo.db.dish
    result = []

    user = tasks.find_one_or_404({"_id": id})
    return jsonify(user)


@app.route('/api/menulist', methods=['GET'])
def menulist():
    dish = mongo.db.dish

    result = []

    for field in dish.find():
        result.append({'_id': str(field['_id']), 'dishName': field['dishName'], 'discription': field['discription'], 'ingredients': field['ingredients'], 'price': field['price']})
    return jsonify(result)


@app.route('/api/cheflist', methods=['GET'])
def cheflist():
    users = mongo.db.users
    result = []

    for field in users.find({'usertype' : '2'}):
        result.append({'_id': str(field['_id']), 'first_name': field['first_name'], 'last_name': field['last_name'], 'email': field['email']})
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)