document.addEventListener("DOMContentLoaded", function() {
<<<<<<< HEAD
    let hiBtn = document.querySelector(".hiBtn");
    hiBtn.addEventListener("click", function() {
        hiBtn.classList.add("red");
    });
=======
    let canvas = document.querySelector(".myCanvas");
    let myContext = canvas.getContext("2d");
    let stopped = true;

    function start() {
        e = window.event;
        myContext.moveTo(e.clientX-10, e.clientY-10);
        stopped = false;
    }

    function stop() {
        stopped = true;
    }

    function draw() {
        if(!stopped) {
            e = window.event;
            myContext.lineTo(e.clientX-10, e.clientY-10);
            myContext.stroke();
        }
    }

    let body = document.querySelector(".bodyContainer");
    body.addEventListener("onmousedown", start);
    body.addEventListener("onmousemove", draw);
    body.addEventListener("onmouseup", stop);
>>>>>>> bb593d385e2964dbf41dbc11573f82a470ce64fd
});