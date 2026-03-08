from fastapi import APIRouter
from pydantic import BaseModel
from database import jobs_collection

router = APIRouter()


class Job(BaseModel):
    job_name: str
    location: str
    description: str
    qualification: str
    experience: str
    workers_needed: int
    salary: str
    company: str


@router.post("/api/post-job")
def post_job(data: Job):

    jobs_collection.insert_one(data.dict())

    return {"status": "success", "message": "Job posted successfully"}


@router.get("/api/jobs")
def get_jobs():

    jobs = list(jobs_collection.find({}, {"_id": 0}))

    return jobs


@router.get("/api/jobs/{location}")
def jobs_by_location(location: str):

    jobs = list(jobs_collection.find(
        {"location": {"$regex": location, "$options": "i"}},
        {"_id": 0}
    ))

    return jobs
