//OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

//start when the documentation is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

// =================== START ==================
function start(){
    addEvents();
}

// ============ UPDATE & RERENDER =============
function update(){
    addEvents();
    updateTotal();
}

//  == ADD EVENTS==
function addEvents(){
    //remove items from cart
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    //change item quantity
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    })
}

//==HANDLE EVENTS FUNCTIONs ==
function handle_removeCartItem(){
    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1) {
        this.value=1;
    }
    this.value = Math.floor(this.value); // to keep it integer

    update();
}

//== UPDATE & RERENDER FUNCTIONS ==
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElements = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    totalElement.innerHTML = "$" + total;
}