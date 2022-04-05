document.addEventListener("DOMContentLoaded", function() {
    let tablinks = document.querySelectorAll(".tablink");
    let defaultClick = document.querySelector(".defaultClick");
    function openPage(event) {
        let tabContent = document.querySelectorAll(".tabcontent");
        let pageName = event.target.innerText;
        let currentPage = document.querySelectorAll("." + pageName);

        tabContent.forEach(element => element.classList.add("hidden"));
        tablinks.forEach(element => element.classList.add("hiddenBg"));

        // for(i = 0; i < tablinks.length; i++) {
        //     tabContent[i].classList.add("hidden");
        //     tablinks[i].classList.add("hiddenBg");
        // }

        currentPage.forEach(element => {
            element.classList.remove("hidden");
            element.classList.remove("hiddenBg");
        })
        // for(i = 0; i < currentPage.length; i++) {
        //     currentPage[i].classList.remove("hidden");
        //     currentPage[i].classList.remove("hiddenBg");
        // }
    }
    tablinks.forEach(element => element.addEventListener("click", openPage));

    defaultClick.click();
});