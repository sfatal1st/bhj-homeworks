const loader = document.querySelector(".loader");
const items = document.getElementById("items");
let item = {};
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {
        loader.classList.remove("loader_active");
        item = JSON.parse(this.response);
        for (key in item.response.Valute) {
            let html = `
                <div class="item">
                    <div class="item__code">
                        ${item.response.Valute[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${item.response.Valute[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `;
            items.insertAdjacentHTML("beforeend", html);
        }
    };
});