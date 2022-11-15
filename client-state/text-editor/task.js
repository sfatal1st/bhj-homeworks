const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
    localStorage.text = editor.value;
});

document.addEventListener("DOMContentLoaded", () => {
    editor.value = localStorage.getItem("text");
});
