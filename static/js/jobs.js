async function postJob() {

    const job_name = document.getElementById("job_name").value
    const location = document.getElementById("location").value
    const description = document.getElementById("description").value
    const qualification = document.getElementById("qualification").value
    const experience = document.getElementById("experience").value
    const workers_needed = document.getElementById("workers_needed").value
    const salary = document.getElementById("salary").value
    const company = document.getElementById("company").value

    const response = await fetch("/api/post-job", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            job_name: job_name,
            location: location,
            description: description,
            qualification: qualification,
            experience: experience,
            workers_needed: workers_needed,
            salary: salary,
            company: company
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Job Posted Successfully")

    } else {

        alert("Error posting job")

    }

}


async function loadJobs() {

    const response = await fetch("/api/jobs")

    const jobs = await response.json()

    const container = document.getElementById("jobsContainer")

    container.innerHTML = ""

    jobs.forEach(job => {

        const card = document.createElement("div")

        card.className = "job-card"

        card.innerHTML = `
            <h3>${job.job_name}</h3>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <p>Salary: ${job.salary}</p>
            <p>Workers Needed: ${job.workers_needed}</p>
            <p>Description: ${job.description}</p>
        `

        container.appendChild(card)

    })

}
