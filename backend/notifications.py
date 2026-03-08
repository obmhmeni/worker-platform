from fastapi import APIRouter

router = APIRouter()

notifications = [
    {"message":"New job posted near you"},
    {"message":"Worker accepted your job"},
    {"message":"Payment completed successfully"}
]

@router.get("/api/notifications")
def get_notifications():
    return notifications
