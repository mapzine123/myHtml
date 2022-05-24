document.addEventListener("DOMContentLoaded", function() {
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
});