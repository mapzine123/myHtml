document.addEventListener("DOMContentLoaded", function() {
    let navLink = document.querySelectorAll(".topnav a");
    
    function clickNav(event) {
        navLink.forEach(element => element.classList.remove("active"));
        this.classList.add("active");
    }



    navLink.forEach(element => element.addEventListener("click", clickNav));
});