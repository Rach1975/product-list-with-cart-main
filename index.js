// Buttons
// Use functions to create in/decrement buttons
function createIncrementDecrementButtons() {
    const increment = document.createElement("img");
    increment.src = "./assets/images/icon-increment-quantity.svg";
    increment.alt = "Increase purchase";
    increment.classList.add("increment");

    const decrement = document.createElement("img");
    decrement.src = "./assets/images/icon-decrement-quantity.svg";
    decrement.alt = "Decrease purchase";
    decrement.classList.add("decrement");

    return { increment, decrement };
}




document.querySelectorAll(".js-add-to-cart").forEach(button => {
    const insideButton = button.querySelector("button");
    const cartIcon = button.querySelector("img");

    button.addEventListener("click", () => {
        if (insideButton.innerHTML === "Add to Cart") {
            insideButton.innerHTML = 1;
            cartIcon.remove();

            const { increment, decrement } = createIncrementDecrementButtons();

            insideButton.insertAdjacentElement('beforebegin', increment);
            insideButton.insertAdjacentElement('afterend', decrement);

            button.classList.add("selected");
        } 
        
    });

});
