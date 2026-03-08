async function workerSignup() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    const state = document.getElementById("state").value

    const response = await fetch("/api/worker-signup", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password,
            state: state
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Signup Successful")

        window.location.href = "/login"

    } else {

        alert(data.message)

    }

}


async function updateWorkerProfile() {

    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const qualification = document.getElementById("qualification").value
    const experience = document.getElementById("experience").value
    const skills = document.getElementById("skills").value

    const response = await fetch("/api/worker-profile", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            address: address,
            qualification: qualification,
            experience: experience,
            skills: skills
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Profile Updated")

    } else {

        alert("Error updating profile")

    }

}


async function loadWorkers() {

    const response = await fetch("/api/workers")

    const workers = await response.json()

    const container = document.getElementById("workersContainer")

    container.innerHTML = ""

    workers.forEach(worker => {

        const card = document.createElement("div")

        card.className = "worker-card"

        card.innerHTML = `
            <h3>${worker.name}</h3>
            <p>Skills: ${worker.skills || "N/A"}</p>
            <p>Experience: ${worker.experience || "N/A"}</p>
            <p>Email: ${worker.email}</p>
            <p>Phone: ${worker.phone}</p>
        `

        container.appendChild(card)

    })

}


async function searchWorkers() {

    const skill = document.getElementById("skillSearch").value

    const response = await fetch(`/api/search-workers/${skill}`)

    const workers = await response.json()

    const container = document.getElementById("workersContainer")

    container.innerHTML = ""

    workers.forEach(worker => {

        const card = document.createElement("div")

        card.className = "worker-card"

        card.innerHTML = `
            <h3>${worker.name}</h3>
            <p>Skills: ${worker.skills}</p>
            <p>Experience: ${worker.experience}</p>
            <p>Email: ${worker.email}</p>
            <p>Phone: ${worker.phone}</p>
        `

        container.appendChild(card)

    })

}
