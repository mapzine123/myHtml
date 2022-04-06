document.addEventListener("DOMContentLoaded", function() {

    function search() {
        let input = document.querySelector("#mySearch");
        let filter = input.value.toUpperCase();
        let ul = document.querySelector("#myMenu");
        let li = ul.querySelectorAll("li");
        let a;
        li.forEach(element => {
            a = element.querySelector("a");
            if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        })
    }
    let inputBox = document.querySelector("#mySearch");
    inputBox.addEventListener("keyup", search);
});