async function loginUser() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value

    const response = await fetch("/api/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password,
            role: role
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Welcome to WorkerHire")

        setTimeout(() => {
            window.location.href = data.redirect
        }, 2000)

    } else {

        alert(data.message)

    }

}
