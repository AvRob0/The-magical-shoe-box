
function startTheCountdown(){
    //The function StartTheCountdown() connects to the onclick tag and initiate the countdown when clicked
    var currTime = 10;
    //The variable telling what currTime is equals to and var i equals to and the commands for the javascript
    for (var i = 1; i <= 11; i++) {
        if (i === 11) {
            i = setTimeout(function () {
                document.getElementById("Countdown").innerHTML = "Blast off";//Tell javascript to what to write when finish
            }, 1000 * i);
        } else if (i > 6) {//else if statements telling javascript to write below argument when coutdown get below 6
            i = setTimeout(function () {
                document.getElementById("Countdown").innerHTML = currTime + ":Warning Less than half way to launch, time left";
                currTime = currTime - 1;
            }, 1000 * i);
        } else {//else statement telling javascript to write below argument when first started
            i = setTimeout(function () {
                document.getElementById("Countdown").innerHTML = "Time Remaining: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);  
        } 
    }   i = i + 1;
}