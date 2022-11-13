const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
    localStorage.text = editor.value;
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.text) {
        editor.value = localStorage.text;
    } else {
        editor.value = "";
    }
});
