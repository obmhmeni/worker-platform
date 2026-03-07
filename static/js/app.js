// ===== SIMPLE DEMO DATABASE (LOCAL STORAGE) =====

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getJobs() {
    return JSON.parse(localStorage.getItem("jobs")) || [];
}

function saveJobs(jobs) {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function getWorkers() {
    return JSON.parse(localStorage.getItem("workers")) || [];
}

function saveWorkers(workers) {
    localStorage.setItem("workers", JSON.stringify(workers));
}



// ===== SIGNUP =====

function signupUser() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value

    let users = getUsers()

    users.push({
        name,
        email,
        password,
        role
    })

    saveUsers(users)

    alert("Account created successfully!")

    window.location.href = "/login"
}



// ===== LOGIN =====

function loginUser() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    let users = getUsers()

    let user = users.find(u => u.email === email && u.password === password)

    if (!user) {
        alert("Invalid login")
        return
    }

    localStorage.setItem("loggedUser", JSON.stringify(user))

    alert("Login successful!")

    window.location.href = "/dashboard"
}



// ===== CREATE JOB =====

function createJob() {

    const title = document.getElementById("title").value
    const skill = document.getElementById("skill").value
    const workers = document.getElementById("workers").value
    const duration = document.getElementById("duration").value
    const wage = document.getElementById("wage").value

    let jobs = getJobs()

    jobs.push({
        title,
        skill,
        workers,
        duration,
        wage
    })

    saveJobs(jobs)

    alert("Job posted successfully!")

    displayJobs()
}



// ===== DISPLAY JOBS =====

function displayJobs() {

    const container = document.getElementById("jobList")

    if (!container) return

    container.innerHTML = ""

    let jobs = getJobs()

    jobs.forEach(job => {

        let card = document.createElement("div")

        card.className = "job-card"

        card.innerHTML = `
        <h3>${job.title}</h3>
        <p>Skill: ${job.skill}</p>
        <p>Workers Needed: ${job.workers}</p>
        <p>Duration: ${job.duration} days</p>
        <p>Daily Wage: ₹${job.wage}</p>
        <button onclick="applyJob()">Apply</button>
        `

        container.appendChild(card)

    })
}



// ===== WORKER PROFILE SAVE =====

function saveWorkerProfile() {

    const name = document.getElementById("name").value
    const skill = document.getElementById("skill").value
    const experience = document.getElementById("experience").value
    const city = document.getElementById("city").value

    let workers = getWorkers()

    workers.push({
        name,
        skill,
        experience,
        city
    })

    saveWorkers(workers)

    alert("Profile saved successfully!")

}



// ===== APPLY JOB =====

function applyJob() {

    alert("Application sent to recruiter!")

}



// ===== LOGOUT =====

function logout() {

    localStorage.removeItem("loggedUser")

    window.location.href = "/"

}



// ===== AUTO LOAD JOBS =====

document.addEventListener("DOMContentLoaded", () => {

    displayJobs()

})
