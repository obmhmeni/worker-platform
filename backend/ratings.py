from fastapi import APIRouter
from pydantic import BaseModel
from database import workers_collection

router = APIRouter()

class Rating(BaseModel):
    worker_name: str
    rating: float

@router.post("/api/rate-worker")
def rate_worker(data: Rating):

    workers_collection.update_one(
        {"name": data.worker_name},
        {"$set": {"rating": data.rating}}
    )

    return {"status": "Rating Updated"}
