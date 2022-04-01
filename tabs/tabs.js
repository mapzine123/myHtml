document.addEventListener("DOMContentLoaded", function() {
    const TABCONTENT = "tabcontent";
    const ACTIVE = "active";
    const HIDDEN = "hidden";
    let tabcontent = document.getElementsByClassName(TABCONTENT);
    let tablinks = document.querySelectorAll(".tablinks");
    const cityNames = ["London", "Paris", "Tokyo"];
    function openCity() {
        let i;
        const flag = this.classList.contains(ACTIVE);
        for(i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add(HIDDEN);
        }
        for(i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove(ACTIVE);
        }
        if(!flag) {
            document.getElementById(this.value).classList.toggle(HIDDEN);
            this.classList.add(ACTIVE);
        }
    }
    tablinks.forEach(element => element.addEventListener("click", openCity));
});

// document.addEventListener("DOMContentLoaded", function() {
