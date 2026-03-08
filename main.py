from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from backend import auth, workers, jobs
from backend import ratings, notifications

app = FastAPI()

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(auth.router)
app.include_router(workers.router)
app.include_router(jobs.router)
app.include_router(ratings.router)
app.include_router(notifications.router)
@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/worker-dashboard")
def worker_dashboard(request: Request):
    return templates.TemplateResponse("worker-dashboard.html", {"request": request})


@app.get("/recruiter-dashboard")
def recruiter_dashboard(request: Request):
    return templates.TemplateResponse("recruiter-dashboard.html", {"request": request})


@app.get("/workers")
def workers_page(request: Request):
    return templates.TemplateResponse("workers.html", {"request": request})


@app.get("/jobs")
def jobs_page(request: Request):
    return templates.TemplateResponse("jobs.html", {"request": request})


@app.get("/post-job")
def post_job(request: Request):
    return templates.TemplateResponse("post-job.html", {"request": request})


@app.get("/worker-profile")
def worker_profile(request: Request):
    return templates.TemplateResponse("worker-profile.html", {"request": request})

@app.get("/admin")
def admin_dashboard(request: Request):
    return templates.TemplateResponse("admin.html", {"request": request})

@app.get("/notifications")
def notifications_page(request: Request):
    return templates.TemplateResponse("notifications.html", {"request": request})
