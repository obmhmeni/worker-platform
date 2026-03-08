// ================================
// AUTHENTICATION SYSTEM
// ================================


// -------------------------
// SIGNUP FUNCTION
// -------------------------
async function signup(){

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const role = document.getElementById("role").value

if(!name || !email || !password){

alert("Please fill all fields")
return

}

const res = await fetch("/api/signup",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,
email:email,
password:password,
role:role

})

})

const data = await res.json()

alert(data.message)

if(data.status === "success"){

window.location.href="/login"

}

}



// -------------------------
// LOGIN FUNCTION
// -------------------------
async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(!email || !password){

alert("Enter email and password")
return

}

const res = await fetch("/api/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:email,
password:password

})

})

const data = await res.json()

if(data.status === "success"){

alert("Welcome " + data.name)

// Redirect based on role

if(data.role === "worker"){

window.location.href="/worker-dashboard"

}

else if(data.role === "recruiter"){

window.location.href="/recruiter-dashboard"

}

}

else{

alert(data.message)

}

}
