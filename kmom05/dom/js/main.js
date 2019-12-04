//==UserScript==
//@name     DOM
//@version  1
//@grant    none

(function () {
    'use strict';

    var box1 = document.getElementById("box1");
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    var boxHeight = box1.offsetHeight;
    var boxWidth = box1.offsetWidth;

    function centerBox() {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        boxHeight = box1.offsetHeight;
        boxWidth = box1.offsetWidth;
        box1.style.zIndex = 1;
        box1.style.left = (winWidth / 2) - (boxWidth / 2) + "px";
        box1.style.top = (winHeight / 2) - (boxHeight / 2) + "px";
    }

    function toggleCircle() {
        var all = document.getElementsByClassName("selected");

        for (var i = 0; i < all.length; i++) {
            all[i].classList.toggle("circle");
        }
    }

    function copyElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var temp = all[i].cloneNode();

            temp.removeAttribute("id");
            temp.addEventListener("click", function(event) {
                //get the thing that trigger an event
                event.target.classList.toggle("selected");
            });
            temp.addEventListener("dblclick", function(event) {
                //get the thing that trigger an event
                event.preventDefault();
                temp.style.height = 2 + "px";
                temp.style.width = 2 + "px";
                event.target.classList.toggle("animateSize");
                setInterval(function() {event.target.remove(temp);}, 2000);
            });

            document.getElementsByTagName("body")[0].appendChild(temp);
            console.log(temp.style.zIndex);
            var logSome = Math.floor(Math.random() * (window.innerHeight - temp.offsetHeight));
            var logTwo = Math.floor(Math.random() * (window.innerWidth - temp.offsetWidth));

            temp.style.top = logSome + "px";
            temp.style.left = logTwo + "px";
        }
    }

    function removeElements() {
        var all = document.querySelectorAll(".selected");
        var boxDisp = document.getElementById("box1");

        for (var i = 0; i < all.length; i++) {
            boxDisp.remove();
            all[i].classList.remove();
        }
    }

    function changeColor() {
        //If loops to change corresponding colors
        var all = document.getElementsByClassName("selected");
        var allDivs = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var string = allDivs[i].classList;

            string = String(string);
            if (string.includes("green") == true) {
                all[i].classList.remove("green");
                all[i].classList.toggle("yellow");
            }
            if (string.includes("yellow") == true) {
                all[i].classList.remove("yellow");
                all[i].classList.toggle("red");
            }
            if (string.includes("red") == true) {
                all[i].classList.remove("red");
                all[i].classList.toggle("blue");
            }
            if (string.includes("blue") == true) {
                all[i].classList.remove("blue");
                all[i].classList.toggle("green");
            }
        }
    }

    function unselectSel() {
        function opa() {
            return document.querySelectorAll(".selected");
        }
        for (var seta=opa(), yy=0; yy < seta.length; yy++) {
            seta[yy].classList.remove("selected");
        }
    }

    function zOneDown() {
        function trex() {
            return document.getElementsByClassName("selected");
        }
        for (var n=trex(), un = 0; un < n.length; un++) {
            n[un].style.zIndex=parseInt(n[un].style.zIndex) - 1;
        }
    }
    function zOneUp() {
        function trex() {
            return document.getElementsByClassName("selected");
        }
        for (var n=trex(), o=0; o<n.length; o++) {
            n[o].style.zIndex=parseInt(n[o].style.zIndex) + 1;
        }
    }
    function makeBigger() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            if (all[i].style.height == "") {
                all[i].style.height = (200 - 10) + "px";
                all[i].style.width = (200 - 10) + "px";
            } else {
                var getHight = all[i].style.height;

                getHight = getHight.substr(0, getHight.length-2);
                getHight = Number(getHight);
                all[i].style.height = (getHight - 10) + "px";
                all[i].style.width = (getHight - 10) + "px";
            }
        }
    }

    function makeSmaller() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            if (all[i].style.height == "") {
                all[i].style.height = (200 + 10) + "px";
                all[i].style.width = (200 + 10) + "px";
            } else {
                var getHight = all[i].style.height;

                getHight = getHight.substr(0, getHight.length-2);
                getHight = Number(getHight);
                //alert(getHight);
                all[i].style.height = (getHight + 10) + "px";
                all[i].style.width = (getHight + 10) + "px";
            }
        }
    }

    function moveToLeft() {
        var step = 10;
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var left = all[i].offsetLeft;

            all[i].style.left = (left - step) + "px";
        }
    }

    function moveToRight() {
        var step = 10;
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var left = all[i].offsetLeft;

            all[i].style.left = (left + step) + "px";
        }
    }

    function moveDown() {
        var step = 10;
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var top = all[i].offsetTop;

            all[i].style.top = (top + step) + "px";
        }
    }

    function moveUp() {
        var step = 10;
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var top = all[i].offsetTop;

            all[i].style.top = (top - step) + "px";
        }
    }

    function selectAll() {
        var wnot = document.getElementsByClassName("box");

        for (var dettael=wnot, ram=0; ram < dettael.length; ram++) {
            dettael[ram].classList.add("selected");
        }
    }

    function timerSim() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {

            all[i].style.height = Math.floor((Math.random() * 220) + 40) + "px";
            all[i].style.width = Math.floor((Math.random() * 220) + 40) + "px";
            setTimeout(1000);
        }

        function func() {
            var all = document.querySelectorAll(".selected");

            for (var i = 0; i < all.length; i++) {
                var all2 = document.getElementsByClassName("selected");
                var allDivs = document.querySelectorAll(".selected");
                var string = allDivs[i].classList;

                string = String(string);
                if (string.includes("green") == true) {
                    all2[i].classList.remove("green");
                    all2[i].classList.toggle("yellow");
                }
                if (string.includes("yellow") == true) {
                    all2[i].classList.remove("yellow");
                    all2[i].classList.toggle("red");
                }
                if (string.includes("red") == true) {
                    all2[i].classList.remove("red");
                    all2[i].classList.toggle("blue");
                }
                if (string.includes("blue") == true) {
                    all2[i].classList.remove("blue");
                    all2[i].classList.toggle("green");
                }

                all[i].style.height = Math.floor((Math.random() * 220) + 40) + "px";
                all[i].style.width = Math.floor((Math.random() * 220) + 40) + "px";
            }
        }
        [200, 400, 600, 800, 1000].forEach(function(time) {
            setTimeout(func, time);
        });
    }

    function createRandom() {
        var elm = document.getElementById("box1").cloneNode();
        var uuu = Math.floor(Math.random() * 4);
        var fff = Math.floor(Math.random() * (window.innerHeight - box1.offsetHeight));
        var yyy2 = Math.floor(Math.random() * (window.innerWidth - box1.offsetWidth));

        elm.style.top = fff + "px";
        elm.style.left = yyy2 + "px";
        if (uuu == 0) {
        } else if (uuu == 1) {
            elm.classList.remove("green");
            elm.classList.toggle("red");
        } else if (uuu == 2) {
            elm.classList.remove("green");
            elm.classList.toggle("blue");
        } else {
            elm.classList.remove("green");
            elm.classList.toggle("yellow");
        }
        if (uuu < 2) {
            elm.classList.toggle("circle");
        }
        document.getElementsByTagName("body")[0].appendChild(elm);
        elm.addEventListener("click", function(event) {
            event.preventDefault();
            event.target.classList.toggle("selected");
        });
        elm.addEventListener("dblclick", function(event) {
            event.preventDefault();
            elm.style.height = 2 + "px";
            elm.style.width = 2 + "px";
            event.target.classList.toggle("animateSize");
            setInterval(function() {event.target.remove(elm);}, 2000);
        });
    }

    function own() {
        document.body.style.background = "silver";
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {

            all[i].style.height = Math.floor((Math.random() * 220) + 40) + "px";
            all[i].style.width = Math.floor((Math.random() * 220) + 40) + "px";
            setTimeout(1000);
        }
    }

    window.addEventListener("resize", centerBox);
    box1.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.classList.toggle("selected");
    });

    box1.addEventListener("dblclick", function(event) {
        event.preventDefault();
        box1.style.height = 2 + "px";
        box1.style.width = 2 + "px";
        event.target.classList.toggle("animateSize");
        setInterval(function() {event.target.remove(box1);}, 2000);
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        switch (key) {
            case "e":
                toggleCircle();
                break;
            case "t":
                copyElements();
                break;
            case "w":
                makeBigger();
                break;
            case "q":
                makeSmaller();
                break;
            case "y":
                removeElements();
                break;
            case "r":
                changeColor();
                break;
            case "a":
                zOneDown();
                break;
            case "s":
                zOneUp();
                break;
            case "ArrowUp":
                moveUp();
                break;
            case "ArrowDown":
                moveDown();
                break;
            case "ArrowRight":
                moveToRight();
                break;
            case "ArrowLeft":
                moveToLeft();
                break;
            case "u":
                unselectSel();
                break;
            case "i":
                selectAll();
                break;
            case "p":
                createRandom();
                break;
            case "d":
                timerSim();
                break;
            case "k":
                own();
                break;
        }
    });

    centerBox();
})();
