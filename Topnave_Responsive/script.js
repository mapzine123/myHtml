document.addEventListener("DOMContentLoaded", function() {
    function myFunction() {
        var topNav = document.querySelector("#myTopnav");
        if(topNav.className === "topnav") {
            topNav.classList.add("responsive");
        } else {
            topNav.classList.remove("responsive");
        }
    }
    let icon = document.querySelector(".icon");

    let tablinks = document.querySelectorAll(".topnav a:not(.icon)");
    function clickTab(event) {
        const ACTIVE = "active";
        tablinks.forEach(element => element.classList.remove(ACTIVE));
        this.classList.add(ACTIVE);
        icon.click();
    }

    icon.addEventListener("click", myFunction);
    tablinks.forEach(element => element.addEventListener("click", clickTab));
});