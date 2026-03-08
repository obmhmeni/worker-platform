from fastapi import APIRouter
from pydantic import BaseModel
from database import workers_collection

router = APIRouter()


class WorkerSignup(BaseModel):
    name: str
    email: str
    phone: str
    password: str
    state: str


class WorkerProfile(BaseModel):
    email: str
    address: str
    qualification: str
    experience: str
    skills: str


@router.post("/api/worker-signup")
def worker_signup(data: WorkerSignup):

    existing = workers_collection.find_one({"email": data.email})

    if existing:
        return {"status": "error", "message": "Email already exists"}

    workers_collection.insert_one(data.dict())

    return {"status": "success", "message": "Worker registered successfully"}


@router.post("/api/worker-profile")
def worker_profile(data: WorkerProfile):

    workers_collection.update_one(
        {"email": data.email},
        {"$set": {
            "address": data.address,
            "qualification": data.qualification,
            "experience": data.experience,
            "skills": data.skills
        }}
    )

    return {"status": "success", "message": "Profile updated"}


@router.get("/api/workers")
def get_workers():

    workers = list(workers_collection.find({}, {"_id": 0}))

    return workers


@router.get("/api/search-workers/{skill}")
def search_workers(skill: str):

    workers = list(workers_collection.find(
        {"skills": {"$regex": skill, "$options": "i"}},
        {"_id": 0}
    ))

    return workers
