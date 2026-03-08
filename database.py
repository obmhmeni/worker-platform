from pymongo import MongoClient

# Temporary local connection
MONGO_URL = "mongodb://localhost:27017"

client = MongoClient(MONGO_URL)
db = client["workerhire"]

users_collection = db["users"]
workers_collection = db["workers"]
jobs_collection = db["jobs"]
recruiters_collection = db["recruiters"]
logs_collection = db["logs"]
