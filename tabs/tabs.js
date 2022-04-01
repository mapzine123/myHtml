document.addEventListener("DOMContentLoaded", function() {
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.querySelectorAll(".tablinks");
    const cityNames = ["London", "Paris", "Tokyo"];
    function openCity() {
        let i;
        
        for(i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
        }
        for(i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(this.value).classList.remove("hidden");
        this.classList.add("active");
    }
    tablinks.forEach(element => element.addEventListener("click", openCity));
});

// document.addEventListener("DOMContentLoaded", function() {
