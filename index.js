let addProduct = document.getElementsByClassName("addItem");
let addedCart = document.getElementById("addedCart");


for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', addToCart);
    
}

let addedItemPrice = document.getElementsByClassName("price-box");

for (let i = 0; i < addedItemPrice.length; i++) {
    addedItemPrice[i].addEventListener("click", total);
    
}


function addToCart(event) {
    let btn = event.target;
    let btnParent = btn.parentElement;
    let btnGrandParent = btn.parentElement.parentElement;
    let itemName = btnParent.children[0].innerText;
    let itemPrice = btnParent.children[1].innerText;
    let itemImage = btnGrandParent.children[0].src;

    let shopContainer = document.createElement('div');
    shopContainer.innerHTML = `
    <img src=${itemImage} width="40"> 
    <h6 style="margin: 0">${itemName}</h6> 
    <p class="item-price" style="margin: 0">Price: ${itemPrice} BDT</p>
    <button class="btn btn-danger">Remove</button> 
    `
    shopContainer.style.display = 'flex';
    shopContainer.style.justifyContent = 'space-around';
    shopContainer.style.alignItems = 'center';
    shopContainer.style.paddingBottom = '10px';
    addedCart.appendChild(shopContainer);

    
    for (let i = 0; i < addProduct.length; i++) {
        addProduct[i].addEventListener('click', addToCart);
        
    }
}



function total(event) {
    let addedItem = event.target;
    let addedItemParent = addedItem.parentElement;
    let addedItemGrandParent = addedItem.parentElement.parentElement;
    let addedItemPrice = addedItemParent.getElementsByClassName("item-price")[0];
    let totalItemPrice = addedItemGrandParent.getElementsByClassName("total-price")[1];
    let priceFieldContent = addedItemPrice.children[0].innerText;

    console.log(priceFieldContent);

}
// function grandTotal() {
    
//     let pdPrice = document.getElementsByClassName('total-price');
//     let newPrice = parseFloat(pdPrice);
//     let grandTotal = newPrice + newPrice;
//     console.log(grandTotal)

// }

// function handleRemove() {
//     let deleteItem = document.getElementsByClassName("")
//     deleteItem.remove();
// }