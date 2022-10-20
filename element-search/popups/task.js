let modal = document.getElementById("modal_main");
modal.className = "modal modal_active";
let modalClose = document.getElementsByClassName("modal__close");
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        modal.className = "modal";
        modalSuccess.className = "modal";
    }
}
let showSuccess = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");
for (let i = 0; i < showSuccess.length; i++) {
    showSuccess[i].onclick = function() {
        modal.className = "modal";
        modalSuccess.className = "modal modal_active";
    }
}