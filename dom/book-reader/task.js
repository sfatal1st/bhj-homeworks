const book = document.querySelector(".book");
const size = document.querySelectorAll(".font-size");
const listSize = [...size];
const textColor = document.querySelectorAll(".book__control_color > .color");
const listTextColor = [...textColor];
const background = document.querySelectorAll(".book__control_background > .color");
const listBackground = [...background];

listSize.forEach((item) => 
    item.onclick = function() {
        listSize.forEach((item) => item.classList.remove("font-size_active")); 
        item.classList.add("font-size_active");
        if (item.classList.contains("font-size_small")) {
            book.classList.remove("book_fs-big");  
            book.classList.add("book_fs-small");        
        } else if (item.classList.contains("font-size_big")) {
            book.classList.remove("book_fs-small");  
            book.classList.add("book_fs-big"); 
        } else {
            book.classList.remove("book_fs-small");  
            book.classList.remove("book_fs-big"); 
        };
        return false;
});

listTextColor.forEach((item) => 
    item.onclick = function() {
        listTextColor.forEach((item) => item.classList.remove("color_active")); 
        item.classList.add("color_active");
        book.style.color = item.getAttribute("data-text-color")
        return false;
});

listBackground.forEach((item) => 
    item.onclick = function() {
        listBackground.forEach((item) => item.classList.remove("color_active")); 
        item.classList.add("color_active");
        book.style.background = item.getAttribute("data-bg-color")
        return false;
});
 