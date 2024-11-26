let totolPriceData = JSON.parse(localStorage.getItem("totolPrice"))

let cartArr = JSON.parse(localStorage.getItem("cartData")) || []

let productQuantity = document.getElementById("quant")

let productPrice = document.getElementById("prices")

let productTotal = document.getElementById("totalPrice")
productTotal.innerText = "Product Total" + " = " + totolPriceData

let productName = document.getElementById("name")


let title = cartArr.map((el, index) => el.title)
productName.innerText = "Product Name :\n\n" + title.join("\n" + "\n");


let button = document.getElementById("buttonS")
button.addEventListener("click", function () {
    event.preventDefault()
    window.location.href = "./opt.html"
})
button.innerText = totolPriceData