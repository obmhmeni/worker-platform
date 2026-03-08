async function recruiterSignup() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    const state = document.getElementById("state").value
    const company = document.getElementById("company").value

    const response = await fetch("/api/recruiter-signup", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password,
            state: state,
            company: company
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Recruiter Signup Successful")

        window.location.href = "/login"

    } else {

        alert(data.message)

    }

}
