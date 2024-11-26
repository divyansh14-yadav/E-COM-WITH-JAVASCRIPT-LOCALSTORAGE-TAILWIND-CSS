let dataName = JSON.parse(localStorage.getItem("LoginName"))

let regId = document.getElementById("regId")

let logId = document.getElementById("logId")

let proData = JSON.parse(localStorage.getItem("productData"))

let anch = document.getElementById("annchorMain")

let cartArr = JSON.parse(localStorage.getItem("cartData")) || []

let quantit = JSON.parse(localStorage.getItem("quana")) || 1


let cartD = JSON.parse(localStorage.getItem("incr")) || []

let total = 0


console.log(total, "444");

product()

if (dataName !== null) {
    regId.innerHTML = null
    logId.innerHTML = null
    
    let anchor = document.createElement("h5")
    
    anchor.setAttribute("class", "loginName")
    
    anchor.innerText = dataName
    
    let cart = document.createElement("a")
    cart.setAttribute("class", "cartButton")
    
    let totolPriceData = JSON.parse(localStorage.getItem("totolPrice"))
    cart.innerText = " Total  " + "  =  " + Math.floor(totolPriceData)
    cart.href = "./cart.html"
    cart.style.color = "white"
    cart.style.width = "143px"

    let logout = document.createElement("button")

    logout.innerText = "Logout"
    logout.style.fontWeight = "700"

    logout.addEventListener("click", function () {
        localStorage.removeItem("LoginName")
        window.location.href = "./login.html"
    })

    anch.append(anchor, cart, logout)

}

function product() {
    let proDiv = document.getElementById("proLists")
    cartArr?.map((el, i) => {

        let div = document.createElement("div")
        div.setAttribute("class", "divParent")

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class", "divImages")

        let title = document.createElement("h1")
        title.innerText = el.title

        let checkout = document.createElement("button")
        checkout.innerText = "Checkout"

        checkout.setAttribute("class", "proButton")

        checkout.addEventListener("click", function () {
            window.location.href = "./checkout.html"
        })

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute("class", "proButton")
        // remove.style.marginLeft = "20px"
        remove.addEventListener("click", function () {
            removeFun(i)
        })

        let quantity = document.createElement("h3");
        quantity.innerText = el.quantity || 1
        console.log(quantity, "q");

      
        let price = document.createElement("h3")
        price.innerText = el.price


        if (el.quantity) {
            total = total + el.price * el.quantity
            localStorage.setItem("totolPrice",JSON.stringify(total))

        }
        else {
            total = total + el.price

        }

        let incrementCart = document.createElement("button")
        incrementCart.innerText = "Increment"
        incrementCart.setAttribute("class", "proButton")

        incrementCart.addEventListener("click", function () {
            incre(quantity, el, i, price);
        });

        let decrementCart = document.createElement("button")
        decrementCart.innerText = "Decrement"
        decrementCart.setAttribute("class", "proButton")
        // decrementCart.style.marginLeft = "20px"
        decrementCart.addEventListener("click", function () {
            decre(quantity, el, i, price);
        });

        div.append(image, title, price, checkout, remove, incrementCart, decrementCart, quantity)
        proDiv.append(div)
    })
}

function removeFun(index) {
    cartArr.splice(index, 1)
    window.location.href = "./cart.html"
    localStorage.setItem("cartData", JSON.stringify(cartArr))
    localStorage.removeItem("totolPrice")
}

function incre(quantity, el, i, price) {

    el.quantity = (el.quantity || 1) + 1

    cartArr[i] = el

    localStorage.setItem("cartData", JSON.stringify(cartArr))

    quantity.innerText = el.quantity
    window.location.href = "./cart.html"
    // price.innerText = el.price * el.quantity // card mai hi price update karwane ke liye hai

}

function decre(quantity, el, i, price) {
    if (el.quantity>1) {
        el.quantity--
        
        cartArr[i] = el
        localStorage.setItem("cartData", JSON.stringify(cartArr))
        quantity.innerText = el.quantity
        window.location.href = "./cart.html"
    }

    // price.innerText = el.price * el.quantity  // card mai hi price update karwane ke liye hai
} 