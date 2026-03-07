from fastapi import APIRouter

router = APIRouter()

workers = [
    {"name": "Rahul", "skill": "Electrician", "experience": "5 years"},
    {"name": "Amit", "skill": "Plumber", "experience": "3 years"},
]

@router.get("/api/workers")
def get_workers():
    return workers
