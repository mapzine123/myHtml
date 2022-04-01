document.addEventListener("DOMContentLoaded", function() {
    function menuClicked() {
        menuIcon.classList.toggle("change");
    }

    function menuBarClicked(event) {
        menuBar.forEach(element => element.classList.remove("active"));
        this.classList.add("active");

    }

    const menuBar = document.querySelectorAll(".iconBar a");
    menuBar.forEach(element => element.addEventListener("click", menuBarClicked));

    const menuIcon = document.querySelector(".menuIconBox");
    menuIcon.addEventListener("click", menuClicked);
});