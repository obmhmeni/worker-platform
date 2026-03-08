from fastapi import APIRouter
from pydantic import BaseModel
from database import workers_collection, recruiters_collection, logs_collection

router = APIRouter()


class LoginData(BaseModel):
    email: str
    password: str
    role: str


@router.post("/api/login")
def login(data: LoginData):

    if data.role == "worker":

        user = workers_collection.find_one({"email": data.email})

        if not user:
            return {"status": "error", "message": "Worker not found"}

        if user["password"] != data.password:
            return {"status": "error", "message": "Incorrect password"}

        logs_collection.insert_one({
            "user": data.email,
            "role": "worker",
            "action": "login"
        })

        return {
            "status": "success",
            "redirect": "/worker-dashboard"
        }

    elif data.role == "recruiter":

        user = recruiters_collection.find_one({"email": data.email})

        if not user:
            return {"status": "error", "message": "Recruiter not found"}

        if user["password"] != data.password:
            return {"status": "error", "message": "Incorrect password"}

        logs_collection.insert_one({
            "user": data.email,
            "role": "recruiter",
            "action": "login"
        })

        return {
            "status": "success",
            "redirect": "/recruiter-dashboard"
        }

    return {"status": "error", "message": "Invalid role"}
