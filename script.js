window.onload = function(){
    var sec = document.getElementById("seconds");
    var ten = document.getElementById("tens");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var secs = 00;
    var tens = 00;
    var Interval;

    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(timer,10);
    }
    stop.onclick = function() {
        clearInterval(Interval);
    }
    reset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        secs = "00";
        sec.innerHTML = secs;
        ten.innerHTML = tens;
    }

    // timer func
    function timer() {
        tens++;
        if (tens<=9) {
            ten.innerHTML = "0"+tens;
        }

        if(tens>9) {
            ten.innerHTML = tens;
        }

        if (tens>99) {
            secs++;
            sec.innerHTML = "0"+secs;
            tens = 0;
            ten.innerHTML = "0"+tens;
        }
        if (secs>9) {
            sec.innerHTML = secs;
        }
    }
}