const product = document.querySelectorAll(".product");
const listProduct = [...product];
const cart = document.querySelector(".cart__products");

listProduct.forEach((item) => 
    item.querySelector(".product__quantity-control_dec").addEventListener("click", () => {
        if (--item.querySelector(".product__quantity-value").textContent < 1) {
        item.querySelector(".product__quantity-value").textContent = 1;
    }
    }));
    
listProduct.forEach((item) => 
    item.querySelector(".product__quantity-control_inc").addEventListener("click", () => {
        ++item.querySelector(".product__quantity-value").textContent; 
    }));

listProduct.forEach((item) => 
    item.querySelector(".product__add").addEventListener("click", () => {
        let hasProduct = false; 
        let indexProduct = -1; 
        for (elem of cart.querySelectorAll(".cart__product")) {
            indexProduct++;
            if (elem.getAttribute("data-id") === item.getAttribute("data-id")) {
                hasProduct = true;
                break;
            }
        }
        if (!hasProduct) { 
            const html = `
                <div class="cart__product" data-id="${item.getAttribute("data-id")}">
                <img class="cart__product-image" src="${item.querySelector(".product__image").src}">
                <div class="cart__product-count">${item.querySelector(".product__quantity-value").textContent}</div>
                </div>
            `;
            cart.insertAdjacentHTML("beforeend", html);
        } else {
            cart.querySelectorAll(".cart__product")[indexProduct].querySelector(".cart__product-count").textContent = 
                Number(cart.querySelectorAll(".cart__product")[indexProduct].querySelector(".cart__product-count").textContent) +
                Number(item.querySelector(".product__quantity-value").textContent);
        }
    }));
