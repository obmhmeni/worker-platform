from fastapi import APIRouter
from pydantic import BaseModel
from database import users_collection

router = APIRouter()

class User(BaseModel):
    name: str
    email: str
    password: str
    role: str


@router.post("/api/signup")
def signup(user: User):

    existing = users_collection.find_one({"email": user.email})

    if existing:
        return {"status":"error","message":"Email already exists"}

    users_collection.insert_one(user.dict())

    return {"status":"success","message":"Account created"}


class Login(BaseModel):
    email: str
    password: str


@router.post("/api/login")
def login(data: Login):

    user = users_collection.find_one({"email":data.email})

    if not user:
        return {"status":"error","message":"User not found"}

    if user["password"] != data.password:
        return {"status":"error","message":"Wrong password"}

    return {
        "status":"success",
        "role":user["role"],
        "name":user["name"]
    }
