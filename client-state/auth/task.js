const welcome = document.querySelector(".welcome");
const form = document.getElementById("signin__form");
const textId = document.getElementById("user_id");

if (!localStorage.userId) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
        xhr.send(formData); 
        xhr.onload = () => {
            if (xhr.response.success) {
                form.closest(".signin").classList.remove("signin_active");
                form.reset();
                welcome.classList.add("welcome_active");
                localStorage.userId = xhr.response.user_id;
                textId.textContent = xhr.response.user_id;    
            } else alert("Неверный логин/пароль");
        };
    });
} else {
    form.closest(".signin").classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    textId.textContent = localStorage.userId;
};