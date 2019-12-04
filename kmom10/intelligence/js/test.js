window.Test = (function () {
    "use strict";

    var score = 0;
    var firstAnswer = 0;
    var countReset = 0;
    var LogScore2 = 0;
    var LogScore3 = 0;

    function addAl(drone) {
        drone.addEventListener("click", function(event) {
            event.preventDefault();
            var boxa03 = document.getElementById("a03");

            if (firstAnswer == 0) {
                event.target.classList.toggle("red");
                firstAnswer = 10;
                boxa03.classList.toggle("green");
            }
        });
    }

    function remDivs(rem) {
        document.getElementById(rem).remove();
    }

    function endTest() {
        countReset = 6;
        remDivs('flagEttDark');
        remDivs('flagTwoDark');
        remDivs('flagThreeDark');
        remDivs('flagFourDark');
        remDivs('flagFiveDark');
        remDivs('flagSexDark');
        remDivs('flagSevenDark');
        remDivs('flagEightDark');
        remDivs('flagNineDark');
        remDivs('q01');

        var q01 = document.createElement('div');
        var shw = "Test is now completed! <br> Your final score is <b>";
        var ppp = "</b> of  27 possible points.";

        if (score < 10) {
            var fmp = "<br> Your IQ right now a little bit low! Take a nap and try again later!";
        } else if (score >= 10 && score < 19) {
            fmp = "<br> Good work. Your IQ is right in the middle of an avarage human being!";
        } else {
            fmp = "<br> Welldone! Try to do rocket science! Smart people might need some help!";
        }
        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = shw + score + ppp + fmp;
    }

    function matchTextFlags() {
        /**
        * Function that displays dark flags so you can click on them and select them in right order
        */
        countReset = 5;
        var countGood = 1;
        var shw3 = "5) Poland<br>6) Denmark <br> 7) Belgium<br>8) France <br>9) Romania";
        var flagOrder = "1) Japan <br>2) Sweden<br>3) Ukraine<br>4) Ivory Coast<br>" + shw3;

        remDivs('flagOne');
        remDivs('flagTwo');
        remDivs('flagThree');
        remDivs('q02');
        remDivs('q03');
        remDivs('flagFour');
        remDivs('flagFive');
        remDivs('flagSex');
        remDivs('flagSeven');
        remDivs('flagEight');
        remDivs('flagNine');

        var q01 = document.createElement('div');

        q02 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = flagOrder;

        var flagEttDark = document.createElement('div');

        flagEttDark.id = 'flagEttDark';
        flagEttDark.className = 'elfenbenskustenS';
        document.getElementsByTagName('body')[0].appendChild(flagEttDark);

        var flagTwoDark = document.createElement('div');

        flagTwoDark.id = 'flagTwoDark';
        flagTwoDark.className = 'swedenS';
        document.getElementsByTagName('body')[0].appendChild(flagTwoDark);

        var flagThreeDark = document.createElement('div');

        flagThreeDark.id = 'flagThreeDark';
        flagThreeDark.className = 'ukraineS';
        document.getElementsByTagName('body')[0].appendChild(flagThreeDark);

        var q02 = document.createElement('div');

        q02.id = 'q02';
        q02.className = 'q02';
        document.getElementsByTagName('body')[0].appendChild(q02);
        document.getElementById('q02').innerHTML = "<br>";

        var flagFourDark = document.createElement('div');

        flagFourDark.id = 'flagFourDark';
        flagFourDark.className = 'japanL';
        document.getElementsByTagName('body')[0].appendChild(flagFourDark);

        var flagFiveDark = document.createElement('div');

        flagFiveDark.id = 'flagFiveDark';
        flagFiveDark.className = 'polandS';
        document.getElementsByTagName('body')[0].appendChild(flagFiveDark);

        var flagSevenDark = document.createElement('div');

        flagSevenDark.id = 'flagSevenDark';
        flagSevenDark.className = 'belgiumS';
        document.getElementsByTagName('body')[0].appendChild(flagSevenDark);
        var q03 = document.createElement('div');

        q03.id = 'q03';
        q03.className = 'q03';
        document.getElementsByTagName('body')[0].appendChild(q03);
        document.getElementById('q03').innerHTML = "<br>";
        var flagSexDark = document.createElement('div');

        flagSexDark.id = 'flagSexDark';
        flagSexDark.className = 'denmarkS';
        document.getElementsByTagName('body')[0].appendChild(flagSexDark);
        var flagEightDark = document.createElement('div');

        flagEightDark.id = 'flagEightDark';
        flagEightDark.className = 'ukraineS';
        document.getElementsByTagName('body')[0].appendChild(flagEightDark);
        var flagNineDark = document.createElement('div');

        flagNineDark.id = 'flagNineDark';
        flagNineDark.className = 'romaniaS';
        document.getElementsByTagName('body')[0].appendChild(flagNineDark);

        var elfenbenskustenS = document.getElementById("flagEttDark");
        var japanS = document.getElementById("flagFourDark");
        var swedenS = document.getElementById("flagTwoDark");
        var ukraineS = document.getElementById("flagThreeDark");
        var polandS = document.getElementById("flagFiveDark");
        var denmarkS = document.getElementById("flagSexDark");
        var belgiumS = document.getElementById("flagSevenDark");
        var franceS = document.getElementById("flagEightDark");
        var romaniaS = document.getElementById("flagNineDark");

        ukraineS.addEventListener("click", function(event) {
            if (countGood == 3) {
                event.preventDefault();
                var flagThree = document.createElement('div');

                flagThree.id = 'flagThree';
                flagThree.className = 'flag3 ukraine';
                document.getElementsByTagName('body')[0].appendChild(flagThree);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';

                flagThree.appendChild(innerDiv);
                var div = document.getElementById('flagThree');
                var clone = div.cloneNode(true);

                while (ukraineS.firstChild) {
                    ukraineS.firstChild.remove();
                }
                ukraineS.appendChild(clone);
                document.getElementsByClassName("flag3")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        swedenS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 2) {
                var flagTwo = document.createElement('div');

                flagTwo.id = 'flagTwo';
                flagTwo.className = 'flag2 sweden';
                document.getElementsByTagName('body')[0].appendChild(flagTwo);
                var innerDiv3 = document.createElement('div');

                innerDiv3.className = 'part1';
                var innerDiv4 = document.createElement('div');

                innerDiv4.className = 'part2';

                flagTwo.appendChild(innerDiv3);
                flagTwo.appendChild(innerDiv4);
                var div = document.getElementById('flagTwo');
                var clone = div.cloneNode(true);

                while (swedenS.firstChild) {
                    swedenS.firstChild.remove();
                }
                swedenS.appendChild(clone);
                document.getElementsByClassName("flag2")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        elfenbenskustenS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 4) {
                var flagEtt = document.createElement('div');

                flagEtt.id = 'flagOne';
                flagEtt.className = 'flag elfenbenskusten';
                document.getElementsByTagName('body')[0].appendChild(flagEtt);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';
                var innerDiv2 = document.createElement('div');

                innerDiv2.className = 'part2';

                flagEtt.appendChild(innerDiv);
                flagEtt.appendChild(innerDiv2);

                var div = document.getElementById('flagOne');
                var clone = div.cloneNode(true);

                while (elfenbenskustenS.firstChild) {
                    elfenbenskustenS.firstChild.remove();
                }
                elfenbenskustenS.appendChild(clone);
                document.getElementsByClassName("flag")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        japanS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 1) {
                var flagFour = document.createElement('div');

                flagFour.id = 'flagFour';
                flagFour.className = 'flag4 japan';
                document.getElementsByTagName('body')[0].appendChild(flagFour);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';

                flagFour.appendChild(innerDiv);
                var div = document.getElementById('flagFour');
                var clone = div.cloneNode(true);

                while (japanS.firstChild) {
                    japanS.firstChild.remove();
                }
                japanS.appendChild(clone);
                document.getElementsByClassName("flag4")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        polandS.addEventListener("click", function(event) {
            if (countGood == 5) {
                event.preventDefault();
                var flagFive = document.createElement('div');

                flagFive.id = 'flagFive';
                flagFive.className = 'flag5 poland';
                document.getElementsByTagName('body')[0].appendChild(flagFive);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';

                flagFive.appendChild(innerDiv);
                var div = document.getElementById('flagFive');
                var clone = div.cloneNode(true);

                while (polandS.firstChild) {
                    polandS.firstChild.remove();
                }
                polandS.appendChild(clone);
                document.getElementsByClassName("flag5")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        denmarkS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 6) {
                var flagSex = document.createElement('div');

                flagSex.id = 'flagSex';
                flagSex.className = 'flag6 denmark';
                document.getElementsByTagName('body')[0].appendChild(flagSex);
                var innerDiv3 = document.createElement('div');

                innerDiv3.className = 'part1';
                var innerDiv4 = document.createElement('div');

                innerDiv4.className = 'part2';

                flagSex.appendChild(innerDiv3);
                flagSex.appendChild(innerDiv4);
                var div = document.getElementById('flagSex');
                var clone = div.cloneNode(true);

                while (denmarkS.firstChild) {
                    denmarkS.firstChild.remove();
                }
                denmarkS.appendChild(clone);
                document.getElementsByClassName("flag6")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        belgiumS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 7) {
                var flagSeven = document.createElement('div');

                flagSeven.id = 'flagSeven';
                flagSeven.className = 'flag7 belgium';
                document.getElementsByTagName('body')[0].appendChild(flagSeven);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';
                var innerDiv2 = document.createElement('div');

                innerDiv2.className = 'part2';

                flagSeven.appendChild(innerDiv);
                flagSeven.appendChild(innerDiv2);
                var div = document.getElementById('flagSeven');
                var clone = div.cloneNode(true);

                while (belgiumS.firstChild) {
                    belgiumS.firstChild.remove();
                }
                belgiumS.appendChild(clone);
                document.getElementsByClassName("flag7")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        franceS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 8) {
                var flagEight = document.createElement('div');

                flagEight.id = 'flagEight';
                flagEight.className = 'flag8 france';
                document.getElementsByTagName('body')[0].appendChild(flagEight);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';
                var innerDiv2 = document.createElement('div');

                innerDiv2.className = 'part2';

                flagEight.appendChild(innerDiv);
                flagEight.appendChild(innerDiv2);
                var div = document.getElementById('flagEight');
                var clone = div.cloneNode(true);

                while (franceS.firstChild) {
                    franceS.firstChild.remove();
                }
                franceS.appendChild(clone);
                document.getElementsByClassName("flag8")[1].remove();
                countGood++;
                score = score + 1;
            } else {
                endTest();
            }
        });
        romaniaS.addEventListener("click", function(event) {
            event.preventDefault();
            if (countGood == 9) {
                var flagNine = document.createElement('div');

                flagNine.id = 'flagNine';
                flagNine.className = 'flag9 romania';
                document.getElementsByTagName('body')[0].appendChild(flagNine);
                var innerDiv = document.createElement('div');

                innerDiv.className = 'part1';
                var innerDiv2 = document.createElement('div');

                innerDiv2.className = 'part2';
                flagNine.appendChild(innerDiv);
                flagNine.appendChild(innerDiv2);

                var div = document.getElementById('flagNine');
                var clone = div.cloneNode(true);

                while (romaniaS.firstChild) {
                    romaniaS.firstChild.remove();
                }
                romaniaS.appendChild(clone);
                document.getElementsByClassName("flag9")[1].remove();
                countGood++;
                score = score + 1;
                /**
                * Test is now over and we move on to the final score panel
                */
                setTimeout(endTest, 500);
            } else {
                endTest();
            }
        });
    }

    function textFlags() {
        /**
        * Function that creates 9 flags using javascript
        */
        countReset = 4;
        try {
            remDivs("btn1");
            remDivs("q01");
        } catch (e) {console.log("");}
        var flagEtt = document.createElement('div');

        flagEtt.id = 'flagOne';
        flagEtt.className = 'flag elfenbenskusten';
        document.getElementsByTagName('body')[0].appendChild(flagEtt);

        var innerDiv = document.createElement('div');

        innerDiv.className = 'part1';
        var innerDiv2 = document.createElement('div');

        innerDiv2.className = 'part2';

        flagEtt.appendChild(innerDiv);
        flagEtt.appendChild(innerDiv2);
        var flagTwo = document.createElement('div');

        flagTwo.id = 'flagTwo';
        flagTwo.className = 'flag2 sweden';
        document.getElementsByTagName('body')[0].appendChild(flagTwo);

        var innerDiv3 = document.createElement('div');

        innerDiv3.className = 'part1';
        var innerDiv4 = document.createElement('div');

        innerDiv4.className = 'part2';

        flagTwo.appendChild(innerDiv3);
        flagTwo.appendChild(innerDiv4);

        var flagThree = document.createElement('div');

        flagThree.id = 'flagThree';
        flagThree.className = 'flag3 ukraine';
        document.getElementsByTagName('body')[0].appendChild(flagThree);

        innerDiv = document.createElement('div');
        innerDiv.className = 'part1';

        flagThree.appendChild(innerDiv);
        var q02 = document.createElement('div');

        q02.id = 'q02';
        q02.className = 'q02';
        document.getElementsByTagName('body')[0].appendChild(q02);
        document.getElementById('q02').innerHTML = "<br>";
        var flagFour = document.createElement('div');

        flagFour.id = 'flagFour';
        flagFour.className = 'flag4 japan';
        document.getElementsByTagName('body')[0].appendChild(flagFour);
        innerDiv = document.createElement('div');
        innerDiv.className = 'part1';

        flagFour.appendChild(innerDiv);
        var flagFive = document.createElement('div');

        flagFive.id = 'flagFive';
        flagFive.className = 'flag5 poland';
        document.getElementsByTagName('body')[0].appendChild(flagFive);

        innerDiv = document.createElement('div');
        innerDiv.className = 'part1';

        flagFive.appendChild(innerDiv);

        var flagSeven = document.createElement('div');

        flagSeven.id = 'flagSeven';
        flagSeven.className = 'flag7 belgium';
        document.getElementsByTagName('body')[0].appendChild(flagSeven);

        innerDiv = document.createElement('div');

        innerDiv.className = 'part1';
        innerDiv2 = document.createElement('div');
        innerDiv2.className = 'part2';

        flagSeven.appendChild(innerDiv);
        flagSeven.appendChild(innerDiv2);
        var q03 = document.createElement('div');

        q03.id = 'q03';
        q03.className = 'q03';
        document.getElementsByTagName('body')[0].appendChild(q03);
        document.getElementById('q03').innerHTML = "<br>";
        var flagSex = document.createElement('div');

        flagSex.id = 'flagSex';
        flagSex.className = 'flag6 denmark';
        document.getElementsByTagName('body')[0].appendChild(flagSex);

        innerDiv3 = document.createElement('div');
        innerDiv3.className = 'part1';
        innerDiv4 = document.createElement('div');

        innerDiv4.className = 'part2';

        flagSex.appendChild(innerDiv3);
        flagSex.appendChild(innerDiv4);

        var flagEight = document.createElement('div');

        flagEight.id = 'flagEight';
        flagEight.className = 'flag8 france';
        document.getElementsByTagName('body')[0].appendChild(flagEight);

        innerDiv = document.createElement('div');

        innerDiv.className = 'part1';
        innerDiv2 = document.createElement('div');
        innerDiv2.className = 'part2';

        flagEight.appendChild(innerDiv);
        flagEight.appendChild(innerDiv2);
        var flagNine = document.createElement('div');

        flagNine.id = 'flagNine';
        flagNine.className = 'flag9 romania';
        document.getElementsByTagName('body')[0].appendChild(flagNine);

        innerDiv = document.createElement('div');

        innerDiv.className = 'part1';
        innerDiv2 = document.createElement('div');

        innerDiv2.className = 'part2';

        flagNine.appendChild(innerDiv);
        flagNine.appendChild(innerDiv2);
        /**
        * Copy all again to 9
        */
        setTimeout(matchTextFlags, 5000);
    }

    function mesTwo() {
        countReset = 4;
        LogScore3 = score;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a00");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");
        var q01 = document.createElement('div');
        var yui = "Your current score is <b>" + score +"</b><br>";
        var shw2 = "<br>In the next section you will see several flags. You have ";
        var sh3 = "5 seconds to remember them. <br>";
        var sh4 = "If you select flag in the right order you can continue! <br>";
        var sh5 = "If you click on the flag in the wrong order, test will end and <br>";
        var sh6 = "the final score board will be displayed.";

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = yui + shw2 + sh3 + sh4 + sh5 + sh6;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Start test 3 -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            textFlags();
        });
    }

    function fizzBuzz(start1, stop1) {
        var comma;
        var count = 0;

        if (stop1 == start1) {
            comma = "invalid input";
        }
        if (stop1 < start1) {
            comma = "invalid input";
        }

        for (start1; start1 < (stop1 + 1); start1++) {
            if ((start1 % 3) == 0 && (start1 % 5) != 0) {
                if (count < 1) {
                    comma = "Fizz";
                    count = 100;
                } else {
                    comma = comma +  "," + "Fizz";
                }
            } else if ((start1 % 5) == 0 && (start1 % 3) != 0) {
                comma = comma + "," + "Buzz";
            } else if ((start1 % 5) == 0 && (start1 % 3) == 0) {
                comma = comma + ",Fizz Buzz";
            } else {
                comma = comma + "," + start1;
            }
        }
        return comma;
    }

    function fizzbuzz() {
        countReset = 3;
        remDivs("q01");
        remDivs("btn1");
        var start = 9;
        var stop = 14;
        var svaret = fizzBuzz(start, stop);
        var q01 = document.createElement('div');
        var shw5 = "What comes next in this fizzbuzz sequence:";

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = shw5 + " <br>" + svaret;
        var a00 = document.createElement('div');

        a00.id = 'a00';
        a00.className = 'a00';
        document.getElementsByTagName('body')[0].appendChild(a00);
        document.getElementById('a00').innerHTML = "Buzz";

        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "Fizz";
        var a02 = document.createElement('div');

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = "16";
        var a03 = document.createElement('div');

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = "FizzBuzz";
        var boxa00 = document.getElementById("a00");

        addAl(boxa00);

        var boxa01 = document.getElementById("a01");

        addAl(boxa01);
        var boxa02 = document.getElementById("a02");

        addAl(boxa02);
        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = score + 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            mesTwo();
        });
    }

    function mesOne() {
        LogScore2 = score;
        countReset = 2;
        firstAnswer = 0;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");
        var q01 = document.createElement('div');
        var shw6 = "You are now done with first test. Your current score is: ";

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = shw6 + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Start test 2 -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            fizzbuzz();
        });
    }

    function qustion5() {
        firstAnswer = 0;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");
        var q01 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = "What is gravity?";

        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "Chinese turtle soup with green leaves on top";
        var a02 = document.createElement('div');
        var smh10 = "Square of all protons in the reverse matrix object circling the sun";

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = smh10;
        var a03 = document.createElement('div');
        var smh11 = "Force by which a planet or other body draws objects toward its center";

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = smh11;
        var boxa01 = document.getElementById("a01");

        addAl(boxa01);
        var boxa02 = document.getElementById("a02");

        addAl(boxa02);
        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = score + 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            mesOne();
        });
    }

    function qustion4() {
        firstAnswer = 0;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");

        var q01 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = "Click on the prime number:";
        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "100";
        var a03 = document.createElement('div');

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = "5";

        var a02 = document.createElement('div');

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = "364";
        var boxa01 = document.getElementById("a01");

        addAl(boxa01);

        var boxa02 = document.getElementById("a02");

        addAl(boxa02);

        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = score + 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            qustion5();
        });
    }

    function qustion3() {
        firstAnswer = 0;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");
        var q01 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = "What color is blue?";
        var a03 = document.createElement('div');

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = "Blue";

        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "Green";
        var a02 = document.createElement('div');

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = "Dark yellow";
        var boxa01 = document.getElementById("a01");

        addAl(boxa01);
        var boxa02 = document.getElementById("a02");

        addAl(boxa02);
        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = score + 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            qustion4();
        });
    }

    function qustion2() {
        firstAnswer = 0;
        remDivs("btn1");
        remDivs("scorePannel");
        remDivs("q01");
        remDivs("a01");
        remDivs("a02");
        remDivs("a03");
        var q01 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = "How fast is Mach 1 speed?";
        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "3 m/s";
        var a03 = document.createElement('div');

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = "343 m/s";
        var a02 = document.createElement('div');

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = "1000 m/s";

        /**
        * Creating score div here to show the results
        */
        var boxa01 = document.getElementById("a01");

        addAl(boxa01);
        var boxa02 = document.getElementById("a02");

        addAl(boxa02);
        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = score + 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            qustion3();
        });
    }

    function qustion1() {
        countReset = 1;

        try {
            document.getElementById("welcomeContainer").remove();
        } catch (e) {console.log("");}
        var q01 = document.createElement('div');

        q01.id = 'q01';
        q01.className = 'q01';
        document.getElementsByTagName('body')[0].appendChild(q01);
        document.getElementById('q01').innerHTML = "How many days is there in one year";
        var a01 = document.createElement('div');

        a01.id = 'a01';
        a01.className = 'a01';
        document.getElementsByTagName('body')[0].appendChild(a01);
        document.getElementById('a01').innerHTML = "300";
        var a02 = document.createElement('div');

        a02.id = 'a02';
        a02.className = 'a02';
        document.getElementsByTagName('body')[0].appendChild(a02);
        document.getElementById('a02').innerHTML = "264";

        /**
        * Creating score div here to show the results
        */

        var a03 = document.createElement('div');

        a03.id = 'a03';
        a03.className = 'a03';
        document.getElementsByTagName('body')[0].appendChild(a03);
        document.getElementById('a03').innerHTML = "364";

        var boxa01 = document.getElementById("a01");

        addAl(boxa01);

        var boxa02 = document.getElementById("a02");

        addAl(boxa02);

        var boxa03 = document.getElementById("a03");

        boxa03.addEventListener("click", function(event) {
            event.preventDefault();
            if (firstAnswer == 0) {
                event.target.classList.toggle("green");
                firstAnswer = 10;
                score = 3;
            }
            document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        });

        var scorePannel = document.createElement('div');

        scorePannel.id = 'scorePannel';
        scorePannel.className = 'scorePannel';
        document.getElementsByTagName('body')[0].appendChild(scorePannel);
        document.getElementById('scorePannel').innerHTML = "Current score: " + score;
        var btn = document.createElement("BUTTON");

        btn.id = 'btn1';
        var t = document.createTextNode("Next -->");

        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            qustion2();
        });
    }

    var Test = {
        welcome: function() {
            var oneS = "<div class='welcome' id='welcomeContainer'>";
            var twoS = "<br>Welcome to the test that test your intelligence. <br> ";
            var yyy = "It consists of three parts of a total 27 points. If you skip and <br> ";
            var ski = "and press next button without answering, you will get 0 points.";
            var glu = "<br> Good Luck! <br>";
            var thre = "<br><b>Click here to begin the test</b></div>";

            document.getElementById('container').innerHTML = oneS + twoS + yyy + ski + glu + thre;
            var box = document.getElementById("welcomeContainer");

            box.addEventListener("click", function(event) {
                event.preventDefault();
                qustion1();
            });
        },
        reset: function() {
            if (countReset == 1) {
                score = 0;
                firstAnswer = 0;
                remDivs("btn1");
                remDivs("scorePannel");
                try {
                    remDivs("a00");
                } catch (e) {console.log("");}
                remDivs("q01");
                remDivs("a01");
                remDivs("a02");
                remDivs("a03");
                qustion1();
            }
            if (countReset == 3) {
                score = LogScore2;
                remDivs("a00");
                mesOne();
            }
            if (countReset == 3) {
                score = LogScore3;
            }
            if (countReset == 4) {
                score = LogScore3;
                mesTwo();
            }
            if (countReset == 5) {
                score = LogScore3;
                remDivs('flagEttDark');
                remDivs('flagTwoDark');
                remDivs('flagThreeDark');
                remDivs('flagFourDark');
                remDivs('flagFiveDark');
                remDivs('flagSexDark');
                remDivs('flagSevenDark');
                remDivs('flagEightDark');
                remDivs('flagNineDark');
                remDivs('q01');
                textFlags();
            }
            if (countReset == 6) {
                score = LogScore3;
                remDivs('q01');
                textFlags();
            }
        },

        begin: function() {
        }
    };

    return Test;
})();
