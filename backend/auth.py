from fastapi import APIRouter

router = APIRouter()

@router.post("/api/login")
def login():
    return {"status": "success", "message": "Login successful"}

@router.post("/api/signup")
def signup():
    return {"status": "success", "message": "Signup successful"}
