window.onscroll = function() {
    const reveal = document.querySelectorAll('.reveal');
    const viewportHeight = window.innerHeight;
    for (item of reveal) {
        const elementTop = item.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            item.classList.add("reveal_active");
        } else {
            item.classList.remove("reveal_active")
        };
    }
};