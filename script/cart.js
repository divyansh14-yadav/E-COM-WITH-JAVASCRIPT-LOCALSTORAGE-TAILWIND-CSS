// let dataName = JSON.parse(localStorage.getItem("LoginName"))

// let regId = document.getElementById("regId")

// let logId = document.getElementById("logId")

// let proData = JSON.parse(localStorage.getItem("productData"))

// let anch = document.getElementById("annchorMain")

// let cartArr = JSON.parse(localStorage.getItem("cartData")) || []

// // console.log(cartArr);

// let cartD = JSON.parse(localStorage.getItem("incr")) || []
// // console.log(cartD, "8888");
// let total = 0

// product()

// if (dataName !== null) {
//     regId.innerHTML = null
//     logId.innerHTML = null

//     let anchor = document.createElement("h5")

//     anchor.setAttribute("class", "loginName")

//     anchor.innerText = dataName

//     let cart = document.createElement("a")
//     cart.setAttribute("class", "cartButton")

//     cart.innerText = " Total  " + "  =  " + Math.floor(total)
//     cart.href = "./cart.html"
//     cart.style.color = "white"
//     cart.style.width = "143px"
//     // cart.addEventListener("click",cartPage)

//     let logout = document.createElement("a")
//     logout.setAttribute("class", "LogOutButton")

//     logout.innerText = "Logout"
//     logout.href = ""


//     logout.addEventListener("click", function () {
//         localStorage.removeItem("LoginName")
//         window.location.href = "./index.html"
//     })

//     anch.append(anchor, cart, logout)

// }

// function product() {
//     let proDiv = document.getElementById("proList")
//     cartArr.map((el, i) => {

//         let div = document.createElement("div")
//         div.setAttribute("class", "divParent")

//         let image = document.createElement("img")
//         image.src = el.image
//         image.setAttribute("class", "divImages")

//         let title = document.createElement("h1")
//         title.innerText = el.title

//         // let price = document.createElement("h3")
//         // price.innerText = el.price

//         // total = total + el.price

//         let checkout = document.createElement("button")
//         checkout.innerText = "Checkout"

//         checkout.setAttribute("class", "proButton")
//         // button.href = "./"

//         checkout.addEventListener("click",function(){
//             window.location.href = "./checkout.html"
//         })

//         let remove = document.createElement("button")
//         remove.innerText = "Remove"
//         remove.setAttribute("class", "proButton")
//         remove.style.marginLeft = "20px"
//         remove.addEventListener("click", function () {
//             removeFun(i)
//         })

//         let quantit = JSON.parse(localStorage.getItem("incre")) || 1
//         let TotalQuantity = 1;
//         let quantity = document.createElement("h3");
//         quantity.innerText = quantit;
//         // console.log(quantity);

//         let price = document.createElement("h3")
//         price.innerText = el.price
//         let p = el.price
        
//         // total = total + el.price
//         total = quantity.innerText * price.innerText
//         // console.log(quantity,"q");
//         // console.log(price,"p");
        
        
//         // localStorage.setItem("price",JSON.stringify(price.innerText))

//         let incrementCart = document.createElement("button")
//         incrementCart.innerText = "Increment"
//         incrementCart.setAttribute("class", "proButton")

//         incrementCart.addEventListener("click", function () {
//             incre(quantity, TotalQuantity, price,p);
//         });

//         let decrementCart = document.createElement("button")
//         decrementCart.innerText = "Decrement"
//         decrementCart.setAttribute("class", "proButton")
//         decrementCart.style.marginLeft = "20px"
//         decrementCart.addEventListener("click", function () {
//             decre(quantity, TotalQuantity, price,p);
//         });

//         div.append(image, title, price, checkout, remove, incrementCart, decrementCart, quantity)
//         proDiv.append(div)
//     })
// }

// function removeFun(index) {
//     cartArr.splice(index, 1)
//     window.location.href = "./cart.html"
//     localStorage.setItem("cartData", JSON.stringify(cartArr))
// }

// function incre(quantity, TotalQuantity, price,p) {
//     console.log(price, "llll");

//     TotalQuantity = quantity.innerText;
//     TotalQuantity++;
//     quantity.innerText = TotalQuantity;

//     price.innerText = Math.floor(p* TotalQuantity)
//     localStorage.setItem("incre", JSON.stringify(TotalQuantity))

// }

// function decre(quantity, TotalQuantity, price,p) {
//     TotalQuantity = quantity.innerText;
//     TotalQuantity--;
//     quantity.innerText = TotalQuantity;

//     price.innerText = Math.floor(price.innerText - p)
//     localStorage.setItem("incre", JSON.stringify(TotalQuantity))
// }



let dataName = JSON.parse(localStorage.getItem("LoginName"))

let regId = document.getElementById("regId")

let logId = document.getElementById("logId")

let proData = JSON.parse(localStorage.getItem("productData"))

let anch = document.getElementById("annchorMain")

let cartArr = JSON.parse(localStorage.getItem("cartData")) || []

let quantit = JSON.parse(localStorage.getItem("quana")) || 1
// console.log(cartArr);


let cartD = JSON.parse(localStorage.getItem("incr")) || []
// console.log(cartD, "8888");
let total = 0
product()

if (dataName !== null) {
    regId.innerHTML = null
    logId.innerHTML = null

    let anchor = document.createElement("h5")

    anchor.setAttribute("class", "loginName")

    anchor.innerText = dataName

    let cart = document.createElement("a")
    cart.setAttribute("class", "cartButton")

    cart.innerText = " Total  " + "  =  " + Math.floor(total)
    cart.href = "./cart.html"
    cart.style.color = "white"
    cart.style.width = "143px"
    // cart.addEventListener("click",cartPage)

    let logout = document.createElement("a")
    logout.setAttribute("class", "LogOutButton")

    logout.innerText = "Logout"
    logout.href = ""


    logout.addEventListener("click", function () {
        localStorage.removeItem("LoginName")
        window.location.href = "./index.html"
    })

    anch.append(anchor, cart, logout)

}

function product() {
    let proDiv = document.getElementById("proList")
    cartArr.map((el, i) => {

        let div = document.createElement("div")
        div.setAttribute("class", "divParent")

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class", "divImages")

        let title = document.createElement("h1")
        title.innerText = el.title

        // let price = document.createElement("h3")
        // price.innerText = el.price

        // total = total + el.price

        let checkout = document.createElement("button")
        checkout.innerText = "Checkout"

        checkout.setAttribute("class", "proButton")
        // button.href = "./"

        checkout.addEventListener("click",function(){
            window.location.href = "./checkout.html"
        })

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute("class", "proButton")
        remove.style.marginLeft = "20px"
        remove.addEventListener("click", function () {
            removeFun(i)
        })

        // let TotalQuantity = 1;
        let quantity = document.createElement("h3");
        // quantity.innerText = TotalQuantity;
        // console.log(quantity);
        quantity.innerText = quantit
        console.log(quantity,"q");
        

        let price = document.createElement("h3")
        price.innerText = el.price
        let p = el.price
        
        // total = total + el.price
        total = quantity.innerText * price.innerText
        // console.log(quantity,"q");
        // console.log(price,"p");
        
        
        // localStorage.setItem("price",JSON.stringify(price.innerText))

        let incrementCart = document.createElement("button")
        incrementCart.innerText = "Increment"
        incrementCart.setAttribute("class", "proButton")

        incrementCart.addEventListener("click", function () {
            incre(quantity);
        });

        let decrementCart = document.createElement("button")
        decrementCart.innerText = "Decrement"
        decrementCart.setAttribute("class", "proButton")
        decrementCart.style.marginLeft = "20px"
        decrementCart.addEventListener("click", function () {
            decre(quantity);
        });

        div.append(image, title, price, checkout, remove, incrementCart, decrementCart, quantity)
        proDiv.append(div)
    })
}

function removeFun(index) {
    cartArr.splice(index, 1)
    window.location.href = "./cart.html"
    localStorage.setItem("cartData", JSON.stringify(cartArr))
}

function incre(quantity) {
console.log(quantity,"quan");

    let TotalQuantity  = quantity.innerText;
   
    TotalQuantity++;
    console.log(TotalQuantity,"tttt");
    
    quantity.innerText = TotalQuantity;
    localStorage.setItem("quana",JSON.stringify(TotalQuantity))

}

function decre(quantity) {
    let TotalQuantity  = quantity.innerText;
   
    TotalQuantity--;
    console.log(TotalQuantity,"tttt");
    
    quantity.innerText = TotalQuantity;
    localStorage.setItem("quana",JSON.stringify(TotalQuantity))
}