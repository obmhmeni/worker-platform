fetch("/api/jobs")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(job=>{

html+=`
<div class="job-card">
<h3>${job.title}</h3>
<p>${job.location}</p>
<button>Apply</button>
</div>
`

})

document.getElementById("jobs").innerHTML=html;

})
