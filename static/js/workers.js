// ===============================
// WORKER PLATFORM JS
// ===============================


// -------------------------------
// CREATE WORKER PROFILE
// -------------------------------
async function createWorker(){

    const name = document.getElementById("name").value
    const skill = document.getElementById("skill").value
    const experience = document.getElementById("experience").value
    const location = document.getElementById("location").value

    if(!name || !skill || !experience || !location){
        alert("Please fill all fields")
        return
    }

    const res = await fetch("/api/create-worker",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name:name,
            skill:skill,
            experience:experience,
            location:location,
            rating:4.5
        })

    })

    const data = await res.json()

    alert(data.status)

}



// -------------------------------
// LOAD WORKERS FROM DATABASE
// -------------------------------
async function loadWorkers(){

    try{

        const res = await fetch("/api/workers")

        const workers = await res.json()

        const container = document.getElementById("workers")

        if(!container) return

        let html = ""

        workers.forEach(worker => {

            html += `

            <div class="worker-card card">

                <h3>${worker.name}</h3>

                <p><b>Skill:</b> ${worker.skill}</p>

                <p><b>Experience:</b> ${worker.experience}</p>

                <p><b>Location:</b> ${worker.location}</p>

                <p><b>Rating:</b> ⭐ ${worker.rating}</p>

                <div class="worker-buttons">

                    <button onclick="hireWorker('${worker.name}')">
                        Hire Worker
                    </button>

                    <button onclick="rateWorker('${worker.name}')">
                        Rate ⭐
                    </button>

                </div>

            </div>

            `

        })

        container.innerHTML = html

    }
    catch(error){

        console.log("Error loading workers:",error)

    }

}



// -------------------------------
// SEARCH WORKERS
// -------------------------------
function searchWorker(){

    const searchValue = document
        .getElementById("search")
        .value
        .toLowerCase()

    const cards = document.querySelectorAll(".worker-card")

    cards.forEach(card => {

        const text = card.innerText.toLowerCase()

        if(text.includes(searchValue)){
            card.style.display = "block"
        }
        else{
            card.style.display = "none"
        }

    })

}



// -------------------------------
// HIRE WORKER BUTTON
// -------------------------------
function hireWorker(name){

    alert("Job request sent to " + name)

}



// -------------------------------
// RATE WORKER
// -------------------------------
async function rateWorker(name){

    const rating = prompt("Enter rating (1 - 5)")

    if(!rating) return

    const res = await fetch("/api/rate-worker",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            worker_name:name,
            rating:rating
        })

    })

    const data = await res.json()

    alert(data.status)

}



// -------------------------------
// PAGE LOAD EVENT
// -------------------------------
document.addEventListener("DOMContentLoaded", function(){

    loadWorkers()

})
