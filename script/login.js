let form = document.querySelector("form")

form.addEventListener("submit", formData)

let arr = JSON.parse(localStorage.getItem("data1"))


// console.log(arr, "121212");


function formData(e) {
    e.preventDefault()
    let data = {
        email: form.email.value,
        password: form.password.value
    }
    console.log(data.email);

    let flag = false

    arr.map((el, i) => {
        // if (el.email == data.email && el.password == data.password) {
        //     alert("login")
        // }
        // else {
        //     alert("failed")
        // }

        if (el.email == data.email) {
            if (el.password == data.password) {
                flag = true
                localStorage.setItem("LoginName",JSON.stringify(el.name))
                window.location.href = "./index.html"
            }
            else {
                flag = "wrong"

            }

        }

    })
    if (flag == true) {
        alert("login")
    }
    else if (flag == "wrong") {
        alert("wrong password")
    }
    else {
        alert("login failed")
    }
}

