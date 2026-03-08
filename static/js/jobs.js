async function postJob(){

let title=document.getElementById("title").value
let location=document.getElementById("location").value
let salary=document.getElementById("salary").value
let duration=document.getElementById("duration").value
let workers_needed=document.getElementById("workers").value

await fetch("/api/post-job",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({

title,
location,
salary,
duration,
workers_needed

})

})

alert("Job Posted")

}



async function loadJobs(){

let res=await fetch("/api/jobs")

let data=await res.json()

let html=""

data.forEach(job=>{

html+=`

<div class="card">

<h3>${job.title}</h3>

<p>${job.location}</p>

<p>Salary: ${job.salary}</p>

<p>Duration: ${job.duration}</p>

<button>Apply</button>

</div>

`

})

document.getElementById("jobs").innerHTML=html

}

loadJobs()
