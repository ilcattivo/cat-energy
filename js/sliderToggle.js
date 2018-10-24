var toggle = document.querySelector(".toggle"),
	toggleInner = document.querySelector(".toggle__inner"),
	cat = document.querySelector(".example__img");

toggle.addEventListener("click", function() {
	toggleInner.classList.toggle("toggle__inner--right");
	cat.classList.toggle("example__img--after")
})