from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from backend.auth import router as auth_router
from backend.workers import router as workers_router
from backend.recruiters import router as recruiters_router
from backend.jobs import router as jobs_router

app = FastAPI()

# static files
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

# routers
app.include_router(auth_router)
app.include_router(workers_router)
app.include_router(recruiters_router)
app.include_router(jobs_router)


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/role-select")
def role_select(request: Request):
    return templates.TemplateResponse("role-select.html", {"request": request})


@app.get("/worker-signup")
def worker_signup_page(request: Request):
    return templates.TemplateResponse("worker-signup.html", {"request": request})


@app.get("/recruiter-signup")
def recruiter_signup_page(request: Request):
    return templates.TemplateResponse("recruiter-signup.html", {"request": request})


@app.get("/login")
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})


@app.get("/worker-dashboard")
def worker_dashboard(request: Request):
    return templates.TemplateResponse("worker-dashboard.html", {"request": request})


@app.get("/recruiter-dashboard")
def recruiter_dashboard(request: Request):
    return templates.TemplateResponse("recruiter-dashboard.html", {"request": request})


@app.get("/worker-profile")
def worker_profile(request: Request):
    return templates.TemplateResponse("worker-profile.html", {"request": request})


@app.get("/post-job")
def post_job(request: Request):
    return templates.TemplateResponse("post-job.html", {"request": request})


@app.get("/jobs")
def jobs_page(request: Request):
    return templates.TemplateResponse("jobs.html", {"request": request})


@app.get("/workers")
def workers_page(request: Request):
    return templates.TemplateResponse("workers.html", {"request": request})
