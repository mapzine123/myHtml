document.addEventListener("DOMContentLoaded", function() {
    let topNav = document.querySelectorAll(".topnav a");

    function clicked() {
        topNav.forEach(element => element.classList.remove("active"));
        this.classList.add("active");
    }

    topNav.forEach(element => element.addEventListener("click", clicked));
});