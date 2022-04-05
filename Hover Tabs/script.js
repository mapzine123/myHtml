document.addEventListener("DOMContentLoaded", function() {
    let tablinks = document.querySelectorAll(".tablinks");
    let tabContent = document.querySelectorAll(".tabcontent");
    hidden(tabContent);

    function hidden(elements) {
        elements.forEach(element => element.classList.add("hidden"));
    }

    function openCity(event) {
        let currentPage = event.target.innerText;
        let currentContent = document.querySelector("#" + currentPage);
        hidden(tabContent);
        currentContent.classList.remove("hidden");
    }
    tablinks.forEach(element => element.addEventListener("mouseover", openCity));


});