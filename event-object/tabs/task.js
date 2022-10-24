const tabNavigation = document.querySelectorAll("#tabs1 .tab");
const arrayTabNavigation = [...tabNavigation];
const tabContent = document.querySelectorAll("#tabs1 .tab__content");
const arrayTabContent = [...tabContent];

arrayTabNavigation.forEach((item) => {
    item.addEventListener("click", function() {
          arrayTabNavigation.forEach((item) => item.classList.remove("tab_active")); 
          item.classList.add("tab_active");
          arrayTabContent.forEach((item) => item.classList.remove("tab__content_active"));
          arrayTabContent[arrayTabNavigation.indexOf(item)].classList.add("tab__content_active");      
          }
    )
});

