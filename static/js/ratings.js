// ===========================
// WORKER RATING SYSTEM
// ===========================


async function rateWorker(workerName){

let rating = prompt("Give rating from 1 to 5")

if(!rating){

alert("Rating cancelled")
return

}

const res = await fetch("/api/rate-worker",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

worker_name:workerName,
rating:parseFloat(rating)

})

})

const data = await res.json()

alert(data.status)

}
