document.addEventListener("DOMContentLoaded", function() {
    let hiBtn = document.querySelector(".hiBtn");
    hiBtn.addEventListener("click", function() {
        hiBtn.classList.add("red");
    });
});