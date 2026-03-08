from fastapi import APIRouter
from pydantic import BaseModel
from database import jobs_collection

router = APIRouter()

class Job(BaseModel):
    title: str
    location: str
    salary: str
    duration: str
    workers_needed: int


@router.post("/api/post-job")
def post_job(job: Job):

    jobs_collection.insert_one(job.dict())

    return {"status": "Job Posted"}


@router.get("/api/jobs")
def get_jobs():

    jobs = list(jobs_collection.find({}, {"_id": 0}))

    return jobs
