document.addEventListener("DOMContentLoaded", function() {
    let i;
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablink");

    function openCity(event) {
        let cityName = event.target.innerText;
        for(i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
            tablinks[i].classList.add("hiddenBack");
        }
        
        let currentContent = document.querySelectorAll("." + cityName);
        for(i = 0; i < currentContent.length; i++) {
            currentContent[i].classList.remove("hidden");
            currentContent[i].classList.remove("hiddenBack");
            currentContent[i].classList.add(cityName);
        }

    }

    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", openCity);
    }
    document.getElementById("defaultOpen").click();

});