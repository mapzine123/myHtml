document.addEventListener("DOMContentLoaded", function() {
    const acc = document.querySelectorAll(".accordion");
    let i;

    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling; // 해당 element의 다음 element 선택
            panel.classList.toggle("show");
        });
    }
});