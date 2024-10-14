import {menuArray} from "./data.js"

const menuItemsContainer = document.getElementById("menu-items-container")

renderMenu()

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
                <button class="fa-solid fa-plus addButton"></button>
            </div>` 
    })

    menuItemsContainer.innerHTML = menuHtml
    

}