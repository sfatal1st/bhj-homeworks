const modal = document.querySelector(".modal");

if (!document.cookie.split(';').filter((item) => item.includes('modalOk=true')).length) {
    modal.classList.add("modal_active");
};

modal.querySelector(".modal__close").addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "modalOk=1; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT;";
});
