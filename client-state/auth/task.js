const welcome = document.querySelector(".welcome");
const form = document.getElementById("signin__form");
const textId = document.getElementById("user_id");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData); 
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        if (data.success) {
            form.closest(".signin").classList.remove("signin_active");
            if (localStorage.userId === data.user_id) {
                welcome.classList.add("welcome_active");
                textId.textContent = localStorage.userId;
            } else {
                localStorage.userId = data.user_id;
                welcome.classList.add("welcome_active");
                textId.textContent = data.user_id;
            }
        } else alert("Неверный логин/пароль");
    };
});
