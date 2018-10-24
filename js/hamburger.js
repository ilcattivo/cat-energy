// var hamburger = querySelector(".hamburger"),
//     siteList = querySelector(".site-list__drop");

// hamburger.addEventListener("click", function() {
//     siteList.classList.toggle("site-list__drop--hidden")
// })

var hamburger = document.querySelector(".hamburger--spin"),
    siteList = document.querySelectorAll(".site-list__drop");
    
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    for (var i = siteList.length - 1; i >= 0; i--) {
    	siteList[i].classList.toggle("site-list__drop--hidden");
    }  
})