var toggle = document.querySelector(".slider-range"),
    cat = document.querySelector(".example__img");


toggle.addEventListener("input", function() {
    if (toggle.value == 1) {
        cat.classList.add("example__img--after")
    } else {
        cat.classList.remove("example__img--after")
    }
})
