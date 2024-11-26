let dataName = JSON.parse(localStorage.getItem("LoginName"))

let regId = document.getElementById("regId")

let logId = document.getElementById("logId")

let proData = JSON.parse(localStorage.getItem("productData"))

let anch = document.getElementById("annchorMain")

let cartArr = JSON.parse(localStorage.getItem("cartData")) || []

product()

if (dataName !== null) {
    regId.innerHTML = null
    logId.innerHTML = null

    let anchor = document.createElement("h5")

    anchor.setAttribute("class", "loginName")

    anchor.innerText = dataName

    let cart = document.createElement("a")
    cart.setAttribute("class", "cartButton")

    cart.innerText = "Cart"
    cart.href = "./cart.html"
    cart.style.color = "white"
    // cart.addEventListener("click",cartPage)

    let logout = document.createElement("button")
    logout.setAttribute("class", "LogOutButton")
    // logout.style.fontWeight = "700"

    logout.innerText = "Logout"

    logout.addEventListener("click", function () {
        localStorage.removeItem("LoginName")
        window.location.href = "./login.html"
    })



    anch.append(anchor, cart, logout)


}

function product() {

    let proDiv = document.getElementById("proList")
    proData.map((el, i) => {
        let div = document.createElement("div")
        // console.log(el);
        div.setAttribute("class", "divParent")

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class", "divImages")

        let title = document.createElement("h1")
        title.innerText = el.title

        let price = document.createElement("h3")
        price.innerText = el.price

        let button = document.createElement("button")
        button.innerText = "Add to Cart"

        button.addEventListener("click", function () {
            addCart(el)
        })

        button.setAttribute("class", "proButton")

        // button.addEventListener("click",function(){

        // })

        div.append(image, title, price, button)



        proDiv.append(div)

    })
}

function addCart(data) {


    let flag = false

    cartArr.map((el) => {
        console.log(el.id);

        if (el.id === data.id) {
            flag = true
        }
    })
    if (flag == true) {
        alert("Product is already added")
    }
    else {
        alert("product is added")
        cartArr.push(data)
        localStorage.setItem("cartData", JSON.stringify(cartArr))

    }

}