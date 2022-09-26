let productsContainer = document.querySelector(".products-container .cart-items-container");
let favEmpty = document.querySelector(".fav-empty");
let mainSectionContainer = document.querySelector(".main-section-container");

function displayFavourites(allFav = []){
    let favItemsFromLS = JSON.parse(localStorage.getItem("fav")) || allFav;
    handleEmptyFav();
    productsContainer.innerHTML = "";
    favItemsFromLS.map((product) => {
        productsContainer.innerHTML += `
        <div class="product-card">
            <div class="image-container">
                <img src="${product.image}" alt="">
            </div>
            <div class="describtion-container">
                <div class="describtion-product-info">
                    <span class="product p-name">${product.title}</span>
                    <span class="product p-category">${product.category}</span>
                    <button class="add-to-cart" onclick="userAddToCartAbility(${product.id})">add to cart</button>
                </div>
                <div class="describtion-product-price">
                    <div class="product p-price">${product.price}</div>
                    <button class="remove-from-fav" onclick="removeFromFav(${product.id})">remove from favourite</button>
                </div>
            </div>
        </div> 
        `   
    })
}

displayFavourites()

//remove items from favourites
function removeFromFav(id){
    if(window.localStorage.getItem("fav")){
        let LSfavItems = JSON.parse(localStorage.getItem("fav"));
        let filteredItems = LSfavItems.filter(item => item.id !== id);
        window.localStorage.setItem("fav" , JSON.stringify(filteredItems));
        displayFavourites(filteredItems);
    }
}


//function to handle the visibility of empty cart div when the cart is empty
function handleEmptyFav(){
    if(JSON.parse(localStorage.getItem("fav")).length === 0){
        favEmpty.classList.add("active");
        mainSectionContainer.style.display = "none";
    }
}

// handleEmptyFav()