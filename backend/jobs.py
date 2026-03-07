from fastapi import APIRouter

router = APIRouter()

jobs = [
    {"title": "Need Electrician", "location": "Patna"},
    {"title": "Need Plumber", "location": "Delhi"},
]

@router.get("/api/jobs")
def get_jobs():
    return jobs

@router.post("/api/post-job")
def post_job():
    return {"status": "job posted"}
