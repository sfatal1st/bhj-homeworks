const progressBar = document.getElementById("progress");
const form = document.getElementById("form");
const input = document.getElementById("file");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function(e) {
        progressBar.value = (((e.loaded * 100) / e.total) / 100).toFixed(2);
    };
    xhr.send(formData); 
});
