from fastapi import APIRouter
from pydantic import BaseModel
from database import workers_collection

router = APIRouter()

class Worker(BaseModel):
    name: str
    skill: str
    experience: str
    location: str
    rating: float


@router.post("/api/create-worker")
def create_worker(worker: Worker):

    workers_collection.insert_one(worker.dict())

    return {"status": "Worker profile created"}


@router.get("/api/workers")
def get_workers():

    workers = list(workers_collection.find({}, {"_id": 0}))

    return workers
