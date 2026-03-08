async function loadNotifications(){

let res=await fetch("/api/notifications")

let data=await res.json()

let html=""

data.forEach(n=>{

html+=`

<div class="card">

<p>${n.message}</p>

</div>

`

})

document.getElementById("notifications").innerHTML=html

}

loadNotifications()
