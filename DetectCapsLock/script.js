document.addEventListener("DOMContentLoaded", function() {
    let myInput = document.getElementById("myInput");
    let myText = document.querySelector(".text");

    myInput.addEventListener("keyup", detectCaps);

    function detectCaps(event) {
        console.log(event.getModifierState("CapsLock"));
        if(event.getModifierState("CapsLock")) {
            myText.classList.remove("hidden");
        } else {
            myText.classList.add("hidden");
        }
    }
});