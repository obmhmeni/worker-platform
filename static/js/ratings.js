async function submitRating() {

    const worker = document.getElementById("workerEmail").value
    const rating = document.getElementById("rating").value
    const comment = document.getElementById("comment").value

    const response = await fetch("/api/rate-worker", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            worker: worker,
            rating: rating,
            comment: comment
        })

    })

    const data = await response.json()

    if (data.status === "success") {

        alert("Rating Submitted")

    } else {

        alert("Error submitting rating")

    }

}
