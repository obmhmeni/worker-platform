from pymongo import MongoClient

MONGO_URL = "mongodb+srv://your_username:your_password@cluster.mongodb.net"

client = MongoClient(MONGO_URL)

db = client["worker_platform"]

users_collection = db["users"]
jobs_collection = db["jobs"]
workers_collection = db["workers"]
