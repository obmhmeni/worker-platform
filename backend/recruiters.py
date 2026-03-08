from fastapi import APIRouter
from pydantic import BaseModel
from database import recruiters_collection

router = APIRouter()


class RecruiterSignup(BaseModel):
    name: str
    email: str
    phone: str
    password: str
    state: str
    company: str


@router.post("/api/recruiter-signup")
def recruiter_signup(data: RecruiterSignup):

    existing = recruiters_collection.find_one({"email": data.email})

    if existing:
        return {"status": "error", "message": "Email already exists"}

    recruiters_collection.insert_one(data.dict())

    return {"status": "success", "message": "Recruiter registered successfully"}


@router.get("/api/recruiters")
def get_recruiters():

    recruiters = list(recruiters_collection.find({}, {"_id": 0}))

    return recruiters
