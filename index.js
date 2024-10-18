import {menuArray} from "./data.js"

const menuItemsContainer = document.getElementById("menu-items-container")
const totalContainer = document.getElementById("total-container")
const billSection = document.getElementById("bill-section")
const billItemsContainer = document.getElementById("bill-items-container")
const completeOrderBtn = document.getElementById("complete-order-btn")
const paymentInformationContainer = document.getElementById("payment-information-container")
const successMessage = document.getElementById("success-message")
const opacityDiv = document.getElementById("opacity-div")
const goBackBtn = document.getElementById("go-back-btn")
const placeAnotherOrderBtn = document.getElementById("place-another-order-btn")
//Listeners

menuItemsContainer.addEventListener("click", (e)=>{
    console.log(e.target.dataset.a)
    if(e.target.id){
        renderPurchaseItems(e.target.id)
    }
    
})

goBackBtn.addEventListener("click", function(e){
    e.preventDefault()
    paymentInformationContainer.style.display="none"
    opacityDiv.classList.remove("opacity")
})

 
placeAnotherOrderBtn.addEventListener("click", function(){
    successMessage.style.display= "none"
    renderBillTotal(-billTotal)
    billTotal = 0
    billSection.classList.remove("display-final-bill")
    billItemsContainer.innerHTML = ""
})

billItemsContainer.addEventListener("click", (e)=>{
    if(e.target.parentElement.dataset.price){

    if(e.target.tagName === "BUTTON"){
        renderBillTotal(-(e.target.parentElement.dataset.price))
        e.target.parentElement.innerHTML = ""
    }

    if(billTotal===0){
        billSection.classList.remove("display-final-bill")
    }
    }
    

    
})



completeOrderBtn.addEventListener("click",showPaymentElement )

paymentInformationContainer.addEventListener("submit", function(e){
    e.preventDefault()
    billSection.classList.remove("display-final-bill")
    paymentInformationContainer.style.display ="none"
    successMessage.style.display= "block"
    opacityDiv.classList.remove("opacity")
    
})



//Render menu when starting the app
renderMenu()
let billTotal = 0


function renderMenu(){
    let menuHtml = ""
    menuArray.forEach((menuItem)=>{
        menuHtml += `
            <div class="dish-container">   
                <p class="emoji">${menuItem.emoji}</p>
                <div class="dish-information-container">
                    <h2>${menuItem.name}</h2>
                    <p class="ingredients">${menuItem.ingredients}</p>
                    <p class="price">$${menuItem.price}</p>
                </div>
                <button id="${menuItem.id}" class="fa-solid fa-plus addButton" ></button>
            </div>` 
    })

    menuItemsContainer.innerHTML = menuHtml
    

}

function renderPurchaseItems(elementId){
    let purchaseHtml = ""
    let itemPrime = 0
    console.log( elementId)
    menuArray.forEach((dish)=>{
        if(elementId == dish.id){
        purchaseHtml=  `<div class="items-container" data-price="${dish.price}">
                    <p>${dish.name}</p>
                    <button>remove</button>
                    <p class="bill-price">$${dish.price}</p>
                </div>`
                itemPrime = dish.price
            }
        
    })
    billSection.classList.add("display-final-bill")

    billItemsContainer.insertAdjacentHTML("beforeend", purchaseHtml)
    renderBillTotal(itemPrime)
}

function renderBillTotal(newPriceToRender){
    billTotal += newPriceToRender
    totalContainer.innerHTML = `   
                            <div class="a" >
                                <p>Total price:</p>
                                <p>$${billTotal}</p>
                           </div>`
}

function showPaymentElement(){
    paymentInformationContainer.style.display="flex"
    opacityDiv.classList.add("opacity")
}