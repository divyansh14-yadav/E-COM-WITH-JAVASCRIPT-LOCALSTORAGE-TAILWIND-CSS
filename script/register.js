let form = document.querySelector("form")

form.addEventListener("submit", formData)

let arr = JSON.parse(localStorage.getItem("data1")) || []

function formData() {
    event.preventDefault()
    data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    }

    arr.push(data)
    console.log(arr);
    alert("sucess")
    window.location.href = "./login.html"
    localStorage.setItem("data1", JSON.stringify(arr))
}